<template>
  <div class="block" :class="columnClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  cols: {
    type: Number,
    default: 12,
  },
  sm: {
    type: Number,
    default: undefined,
  },
  md: {
    type: Number,
    default: undefined,
  },
  lg: {
    type: Number,
    default: undefined,
  },
  xl: {
    type: Number,
    default: undefined,
  },
});

const columnClasses = computed(() => {
  const classes = [];

  if (props.cols) classes.push(parseInt(props.cols, 10) === 12 ? 'w-full' : `w-${props.cols}/12`);
  if (props.sm) classes.push(parseInt(props.sm, 10) === 12 ? 'sm:w-full' : `sm:w-${props.sm}/12`);
  if (props.md) classes.push(parseInt(props.md, 10) === 12 ? 'md:w-full' : `md:w-${props.md}/12`);
  if (props.lg) classes.push(parseInt(props.lg, 10) === 12 ? 'lg:w-full' : `lg:w-${props.lg}/12`);
  if (props.xl) classes.push(parseInt(props.xl, 10) === 12 ? 'xl:w-full' : `xl:w-${props.xl}/12`);

  return classes;
});
</script>
