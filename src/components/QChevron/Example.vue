<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex justify-center h-screen items-center">
    <q-chevron :accent-color="'rgb(97, 67, 210)'" :state="state.isOpen"/>
  </main>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  isOpen: false,
});
</script>
