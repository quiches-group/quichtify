<template>
  <div class="q-tab flex-auto px-2 py-1 cursor-pointer transition-colors text-center rounded-lg" :data-tab-index="tabIndex">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  tabIndex: {
    type: String,
    default: null,
  },
});
</script>
