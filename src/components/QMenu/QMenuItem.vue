<template>
  <li class="q-menu__item" :class="classes" :style="styles">
    <slot />
  </li>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: '#000',
  },
  activeBackgroundColor: {
    type: String,
    default: '#40B883',
  },
  activeTextColor: {
    type: String,
    default: '#fff',
  },
});

const classes = computed(() => ({
  'q-menu__item--active': props.isActive,
}));

const styles = computed(() => ({
  '--text-color': props.textColor,
  '--active-background-color': props.activeBackgroundColor,
  '--active-text-color': props.activeTextColor,
}));
</script>

<style lang="scss" scoped>
.q-menu__item {
  @apply block px-2 py-1 cursor-pointer;
  background-color: var(--background-color);

  &--active {
    background-color: var(--active-background-color);
    color: var(--active-text-color);
  }
}
</style>
