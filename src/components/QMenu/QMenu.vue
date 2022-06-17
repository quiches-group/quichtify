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
  'col-on-mobile': !props.rowOnMobile,
  'row-on-mobile': props.rowOnMobile,
  'col-on-desktop': !props.rowOnDesktop,
  'row-on-desktop': props.rowOnDesktop,
}));
</script>

<style lang="scss" scoped>
.q-menu {
  @apply flex;
  background-color: var(--bg-color);

  &.col-on-mobile {
    @apply flex-col;
  }

  &.row-on-mobile {
    @apply flex-row;
  }

  &.col-on-desktop {
    @apply md:flex-col;
  }

  &.row-on-desktop {
    @apply md:flex-row;
  }
}
</style>
