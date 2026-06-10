<script lang="ts" setup>
</script>

<template>
  <div class="profile">
    <div class="profile__name-block"></div>
    <div class="profile__contribution-tile">
      <ProfileGithubContribution />
    </div>
    <ProfileLinkWrapper />
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
}
</style>