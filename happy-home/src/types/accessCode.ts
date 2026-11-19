export type AccessCodeStatus = 'loading' | 'success' | 'expired' | 'error' | 'server-error'

export interface AccessCodeResponse {
  code: string
  expiresAt: string
}
