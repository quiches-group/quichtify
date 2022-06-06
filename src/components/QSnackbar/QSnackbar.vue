<template>
  <div
      v-if="isOpen"
      class="border px-4 py-3 rounded relative" role="alert"
      :class="{ 'animate-fadeIn': isOpen, 'animate-fadeOut': isOpen === false, 'opacity-background': isOpen}"
      >
    <slot />
  </div>
</template>

<script setup>

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});


</script>

<style scoped>

</style>
