<script setup lang="ts">
import { computed } from 'vue'
import type { AccessCodeStatus } from '@/types/accessCode'

const props = defineProps<{
  code: string
  status: AccessCodeStatus
}>()

// Always 4 boxes. While loading we show asterisks, on success the real digits.
const digits = computed(() => {
  if (props.status === 'loading') return ['*', '*', '*', '*']
  if (props.status === 'success') return props.code.padEnd(4, '–').slice(0, 4).split('')
  return ['–', '–', '–', '–']
})
</script>

<template>
  <ul class="digits" :aria-label="status === 'success' ? `Access code ${code.split('').join(' ')}` : undefined">
    <li v-for="(digit, index) in digits" :key="index" class="digit">{{ digit }}</li>
  </ul>
</template>

<style scoped>
.digits {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.digit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 80px;
  border: 1px solid var(--color-box-border);
  border-radius: 4px;
  background: var(--color-box);
  color: var(--color-text);
  font-size: 56px;
  font-weight: 700;
}

@media (min-width: 768px) {
  .digit {
    width: 48px;
    height: 65px;
    font-size: 44px;
  }
}
</style>
