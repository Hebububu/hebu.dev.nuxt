<script lang="ts" setup>
import type { PhosphorIconName } from '#phosphor-icons/types';

type ProfileData = {
  label: string
  url: string
  icon: PhosphorIconName
}

const profileData: ProfileData[] = [
  { label: "github.com/Hebububu", url: "https://github.com/Hebububu", icon: 'github-logo' },
  { label: "@Hebu_VRC", url: "https://x.com/Hebu_VRC", icon: 'twitter-logo' },
  { label: "hebu", url: "https://discord.com/users/hebu", icon: 'discord-logo' },
  { label: "2rwin_rommel@naver.com", url: "mailto:2rwin_rommel@naver.com", icon: 'envelope-simple' },

]
</script>

<template>
  <div class="profile-link-wrapper">
    <a class="profile-link-item" v-for="i in profileData" :key="i.label" :href="i.url" target="_blank"
      rel="noopener noreferrer">
      <PhosphorIcon :name="i.icon" size="24" weight="regular" />
      <span>{{ i.label }}</span>
    </a>
  </div>
</template>

<style scoped>
.profile-link-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
}

.profile-link-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-dim);
  font-size: 1rem;
  font-family: 'Libertinus Serif', serif;
}
</style>