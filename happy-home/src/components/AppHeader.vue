<template>
  <header class="header">
    <svg class="logo" viewBox="0 0 18 19" width="18" height="19" fill="none" aria-hidden="true">
      <path
        d="M2 7.5 9 1.5l7 6V17a.5.5 0 0 1-.5.5H11v-5H7v5H2.5A.5.5 0 0 1 2 17V7.5Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
    <span class="name">Happy home</span>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-on-bg);
}

.name {
  font-size: 16px;
  font-weight: 600;
}
</style>
