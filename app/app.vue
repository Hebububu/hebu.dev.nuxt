<script setup lang="ts">
import PageWrapper from './components/PageWrapper.vue';
</script>

<template>
      <main class="main-content">
            <PageWrapper>
                  <NuxtPage />
            </PageWrapper>
      </main>
</template>

<style scoped>
.main-content {
      width: 100%;
      min-height: 100dvh;
}
</style>