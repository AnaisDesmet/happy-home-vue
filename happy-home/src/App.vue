<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AccessCodeCard from '@/components/AccessCodeCard.vue'
import { useAccessCode } from '@/composables/useAccessCode'

const { code, status, fetchCode, requestNewCode } = useAccessCode()

onMounted(fetchCode)
</script>

<template>
  <main class="page">
    <AppHeader />
    <AccessCodeCard :code="code" :status="status" @request="requestNewCode" />
  </main>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-height: 100vh;
  padding: 24px;
}
</style>
