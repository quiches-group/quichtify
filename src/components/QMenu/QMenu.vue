<template>
  <ul class="q-menu" :style="style" :class="classes">
    <slot />
  </ul>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  backgroundColor: {
    type: String,
    default: null,
  },
  rowOnMobile: {
    type: Boolean,
    default: false,
  },
  rowOnDesktop: {
    type: Boolean,
    default: false,
  },
});

const style = computed(() => ({
  '--bg-color': props.backgroundColor,
}));

const classes = computed(() => ({
  'flex-col': !props.rowOnMobile,
  'flex-row': props.rowOnMobile,
  'md:flex-col': !props.rowOnDesktop,
  'md:flex-row': props.rowOnDesktop,
}));
</script>

<style lang="scss" scoped>
.q-menu {
  @apply flex;
  background-color: var(--bg-color);
}
</style>
