<script lang="ts" setup>
</script>

<template>
  <div class="page-wrapper">
    <div class="panel-wrapper">
      <div class="panel-left">
        <div class="panel-left__button-wrapper"></div>
        <div class="panel-left__profile-wrapper"></div>
        <Profile />
      </div>
      <div class="panel-right">
        <slot />
      </div>
    </div>
    <Marquee />
  </div>
</template>

<style>
.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.panel-wrapper {
  display: flex;
  overflow: hidden;
}

/* left panel */
.panel-left {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  background: oklch(97.6% 0 0 / 0.92);
}

/* right panel */
.panel-right {
  width: 70%;
  height: 100%;
  position: relative;
  background: oklch(45.5% 0.0647 301.54 / 0.35);
  border-left: 1px solid oklch(45.5% 0.0647 301.54 / 0.15);
  box-shadow:
    inset 1px 0 0 oklch(100% 0 0 / 0.18),
    inset 0 1px 0 oklch(100% 0 0 / 0.12);
  color: oklch(14.68% 0.0086 285.29);
  z-index: 1;
  overflow-y: auto;
}
</style>