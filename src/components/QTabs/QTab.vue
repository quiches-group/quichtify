<template>
  <div class="flex-auto px-2 py-1 text-center rounded-lg transition-colors cursor-pointer q-tab" :data-tab-index="tabIndex">
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

<style scoped>
.q-tab[disabled] {
  @apply pointer-events-none cursor-not-allowed opacity-75;
}
</style>
