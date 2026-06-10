<script lang="ts" setup>
const contributions = useGithubStore()
await callOnce(contributions.fetchGithubContributions)
</script>

<template>
    <div class="contribution-wrapper">
        <div class="contribution-grid">
            <div class="contribution-column">
                <div class="contribution-cell">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contribution-wrapper {
    border: 1px solid var(--color-border-dark);
    border-radius: 6px;
    background: var(--color-grey-sub);
    overflow: hidden;
}

.contribution-grid {}

.contribution-column {}

.contribution-cell {}
</style>