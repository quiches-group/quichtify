<template>
  <div ref="root" class="flex flex-wrap row m-6" :class="rowClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  align: {
    type: String,
    default: 'start',
  },
  justify: {
    type: String,
    default: 'start',
  },
});

const rowClasses = computed(() => {
  const classes = [];

  classes.push(`justify-${props.justify}`);
  classes.push(`items-${props.align}`);

  return classes.join(' ');
});
</script>

<style>
.row {
  width: 100%;
}
</style>
