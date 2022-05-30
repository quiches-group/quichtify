<!-- TODO: 1 - Create a folder for your component based on QHelloWorld -->
<template>
  <div>
    <h1 class="text-3xl font-bold text-center text-green-500 uppercase">{{ msg }}</h1>
    <h2 class="text-center">
      You’ve successfully run a library with
      <a class="mx-px" target="_blank" href="https://vitejs.dev/">Vite</a>
      and
      <a class="mx-px" target="_blank" href="https://vuejs.org/">Vue 3</a>
    </h2>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
