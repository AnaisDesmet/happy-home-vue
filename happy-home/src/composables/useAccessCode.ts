import { ref } from 'vue'
import type { AccessCodeResponse, AccessCodeStatus } from '@/types/accessCode'

// Empty = no backend yet, so we use a fake one (see fakeRequest below).
const API_URL = import.meta.env.VITE_API_URL

// Stand-in for the real backend until its endpoint is provided.
async function fakeRequest(): Promise<AccessCodeResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  const code = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0')
  return { code, expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString() }
}

async function request(method: 'GET' | 'POST'): Promise<AccessCodeResponse> {
  if (!API_URL) return fakeRequest()

  const response = await fetch(`${API_URL}/code`, { method })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return response.json()
}

export function useAccessCode() {
  const code = ref('')
  const status = ref<AccessCodeStatus>('loading')

  async function load(method: 'GET' | 'POST') {
    if (status.value === 'loading' && method === 'POST') return // no double requests
    status.value = 'loading'
    try {
      const data = await request(method)
      code.value = data.code
      status.value = 'success'
    } catch {
      status.value = 'error' // detailed error states come in add-access-code-errors
    }
  }

  const fetchCode = () => load('GET')
  const requestNewCode = () => load('POST')

  return { code, status, fetchCode, requestNewCode }
}
