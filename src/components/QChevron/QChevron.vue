<template>
  <span class="q-chevron self-center transition-transform ease-in-out duration-250" :class="{ 'rotate-180': props.state }" :style="style"/>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  state: {
    type: Boolean,
    default: false
  },
  accentColor: {
    type: String,
    default: () => 'rgb(55, 65, 81)',
  },
});

const style = computed(() => ({
  '--bg-color': props.accentColor,
}));

</script>

<style scoped>
.q-chevron {
  @apply relative w-3 h-3 flex justify-center items-center;
}

.q-chevron:after {
  content: '';
  border-radius: 3px;
  transform-origin: 50% 100%;
  background-color: var(--bg-color);
  transform: translateX(-1px) rotate(-45deg);
  @apply block w-0.5 h-2
}

.q-chevron:before {
  content: '';
  border-radius: 3px;
  transform-origin: 50% 100%;
  background-color: var(--bg-color);
  transform: rotate(45deg);
  @apply block w-0.5 h-2
}
</style>
