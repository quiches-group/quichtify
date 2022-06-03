<template>
  <div ref="root" class="w-full flex flex-wrap row m-6" :class="rowClasses">
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

const rowClasses = computed(() => [
  `justify-${props.justify}`,
  `items-${props.align}`,
]);
</script>
