<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <span class="q-loader" :style="`border-color: ${bgColor}; border-top-color: ${accentColor}; height: ${size}px; width: ${size}px; border-width: ${borderWidth}px`" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  bgColor: {
    type: String,
    default: () => 'rgb(245, 245, 244)',
  },
  accentColor: {
    type: String,
    default: () => 'rgb(56, 189, 248)',
  },
  size: {
    type: Number,
    default: () => 50,
  },
});

const borderWidth = computed(() => {
  if (props.size < 50) {
    return props.size / 4;
  }

  return 8;
});
</script>

<style scoped>
.q-loader {
  @apply rounded-full q-animate-spinning;
}
</style>
