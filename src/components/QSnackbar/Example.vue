<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-snackbar v-model:isOpen="state.showSnackbar" size="medium" position="bottom" color="#9C27B0">
    <div class="flex flex-col">
      <strong class="font-bold">Holy smokes!</strong>
      <span class="block sm:inline">Something seriously bad happened.</span>
    </div>
  </q-snackbar>

  <q-snackbar v-model:isOpen="state.showSnackbarCustomCloseBtn" size="medium" position="top" color="#E91E63">
    <div class="flex flex-col">
      <strong class="font-bold">Holy smokes!</strong>
      <span class="block sm:inline">Something seriously bad happened.</span>
    </div>
    <template #close-btn>
      <span @click="state.showSnackbarCustomCloseBtn = false">Custom Close Btn</span>
    </template>
  </q-snackbar>
  <div>
    <button @click="state.showSnackbar = true">Open Snackbar</button>
    <br>
    <button @click="state.showSnackbarCustomCloseBtn = true">Open Snackbar Custom Close Button</button>
  </div>
</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({
  showSnackbar: false,
  showSnackbarCustomCloseBtn: false
});
</script>

<style scoped>

</style>
