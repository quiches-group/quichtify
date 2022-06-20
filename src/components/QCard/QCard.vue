<template>
  <div class="q-card">
    <slot />
  </div>
</template>

<script setup>
import 'vue';
</script>

<style>
.q-card {
  @apply flex flex-col rounded-lg shadow-lg w-96 overflow-hidden bg-white;
}
</style>
