<script setup lang="ts">
import type { AccessCodeStatus } from '@/types/accessCode'
import CodeDigits from './CodeDigits.vue'

defineProps<{
  code: string
  status: AccessCodeStatus
}>()

const emit = defineEmits<{
  request: []
}>()
</script>

<template>
  <section class="card" :aria-busy="status === 'loading'">
    <div class="top">
      <h1 class="title">Your access code:</h1>
      <button class="close" type="button" aria-label="Close">
        <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
          <path d="m1 1 10 10M11 1 1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <CodeDigits :code="code" :status="status" />

    <button
      class="action"
      type="button"
      :disabled="status === 'loading'"
      @click="emit('request')"
    >
      <svg
        v-if="status === 'loading'"
        class="spinner"
        viewBox="0 0 12 12"
        width="12"
        height="12"
        fill="none"
        role="img"
        aria-label="Loading"
      >
        <path d="M6 1a5 5 0 1 0 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
      <template v-else>Get new code</template>
    </button>

    <p class="note">
      Your access code is unique for your apartment. If you generate a new code,
      <strong>the old code can not be used anymore.</strong>
    </p>
  </section>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 342px;
  padding: 22px;
  border: 1px solid var(--color-surface-border);
  border-radius: 8px;
  background: var(--color-surface);
  color: var(--color-text);
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.close {
  display: grid;
  place-items: center;
  padding: 4px;
  border: 0;
  background: none;
  color: var(--color-icon-muted);
  cursor: pointer;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border: 0;
  border-radius: 4px;
  background: var(--color-primary);
  color: var(--color-on-primary);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.action:disabled {
  background: var(--color-bg);
  cursor: progress;
}

.note {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 11px;
  line-height: 1.4;
}

.note strong {
  font-weight: 700;
}

.spinner {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 768px) {
  .card {
    width: 288px;
    gap: 20px;
  }
}
</style>
