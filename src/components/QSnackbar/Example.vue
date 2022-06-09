<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-snackbar :is-open="state.showSnackbar" size="medium" position="bottom-left" color="red">
    <div class="flex flex-col">
    <strong class="font-bold">Holy smokes!</strong>
    <span class="block sm:inline">Something seriously bad happened.</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <button @click="buttonAction(false)">Close</button>
  </span>
    </div>
  </q-snackbar>
  <div>
    <button @click="buttonAction(true)">Open Snackbar</button>
  </div>

</template>

<script setup>
import {reactive} from 'vue';

const state = reactive({
  showSnackbar: false,
});

const buttonAction = (newValue) => {
  state.showSnackbar = newValue;
};
</script>

<style scoped>

</style>
