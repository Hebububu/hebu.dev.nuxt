<script lang="ts" setup>
// marquee render constants
const marqueeText = 'HEBU.DEV \u00b7 '
const marqueeRepeatCount = 25
</script>

<template>
    <div class="marquee-rail">
        <div class="marquee-track">
            <span v-for="i in marqueeRepeatCount" :key="i">
                {{ marqueeText }}
            </span>
        </div>
    </div>
</template>

<style scoped>
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