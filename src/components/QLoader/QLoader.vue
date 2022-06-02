<template>
  <span class="q-loader spinner" :style="`border-top-color: ${borderTopColor}`" />
</template>

<script setup>
defineProps({
  borderTopColor: String,
});
</script>

<style scoped>
.spinner {
  @apply w-32 h-32
    border-16 rounded-full border-stone-100 border-t-sky-400
    animate-spin;
}
</style>
