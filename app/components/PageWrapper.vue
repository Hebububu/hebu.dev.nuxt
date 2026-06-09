<script lang="ts" setup>
const marqueeText = 'HEBU.DEV \u00b7 '
const marqueeRepeatCount = 25

const githubContribution = useGithubStore()
await callOnce(githubContribution.fetchGithubContributions)
</script>

<template>
  <!-- <div class="page-wrapper">
    <div class="panel-wrapper">
      <div class="panel-left">
        <div class="panel-left__button-wrapper"></div>
        <div class="panel-left__profile-wrapper">
          <div class="profile">
            <div class="profile__name-block"></div>
            <div class="profile__contribution-tile"></div>
            <div class="profile__link-wrapper">
              <a class="profile__link-item"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-right">
        <slot />
      </div>
    </div>
  </div> -->
  <div class="marquee-rail">
    <div class="marquee-track">
      <span v-for="i in marqueeRepeatCount" :key="i">
        {{ marqueeText }}
      </span>
    </div>
  </div>
</template>

<style>
.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.panel-wrapper {
  display: flex;
  overflow: hidden;
}

/* left panel */
.panel-left {
  width: 30%;
  height: 100%;
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

/* marquee */
.marquee-rail {
  overflow: hidden;
  padding: 0.7rem 0;
  border-top: 1px solid var(--color-border);
  background: var(--color-grey-sub);
}

.marquee-track {
  display: flex;
  white-space: nowrap;
  animation: marquee 40s linear infinite;
  will-change: transform;
}

.marquee-track span {
  font-family: monospace;
  font-size: 0.7rem;
  letter-spacing: 0.5em;
  color: var(--color-grey-main);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>