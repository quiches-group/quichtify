<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-snackbar v-model="state.showSnkbInfo" position="top" dismissable timeout="1000">
    <strong class="block font-bold">Info.</strong>
    <span class="block">Something happened.</span>
  </q-snackbar>

  <q-snackbar v-model="state.showSnkbAlert" color="alert" position="right" dismissable>
    <strong class="block font-bold">Alert !</strong>
    <span class="block">Something bad happened.</span>
  </q-snackbar>

  <q-snackbar v-model="state.showSnkbError" color="error" dismissable>
    <strong class="block font-bold">Holy smokes!</strong>
    <span class="block">Something seriously bad happened.</span>
  </q-snackbar>

  <q-snackbar v-model="state.showCustomSnkb" color="error" position="left" dismissable>
    <strong class="block font-bold">Hey 👋</strong>
    <span class="block">Check out my fancy custom close button !</span>
    <template #close-btn>
      <span @click="state.showCustomSnkb = false">Custom Close Btn ✨</span>
    </template>
  </q-snackbar>

  <div class="flex justify-center items-center w-screen h-screen">
    <div class="flex relative flex-col justify-center items-center pb-20 m-auto w-1/2 h-1/2">
      <q-button :disabled="state.showSnkbInfo" @click="state.showSnkbInfo = true">Show info snackbar</q-button>
      <q-button class="mt-5" :disabled="state.showSnkbAlert" @click="state.showSnkbAlert = true">Show alert snackbar</q-button>
      <q-button class="mt-5" :disabled="state.showSnkbError" @click="state.showSnkbError = true">Show error snackbar</q-button>
      <q-button class="mt-5" :disabled="state.showCustomSnkb" @click="state.showCustomSnkb = true">Show custom snackbar</q-button>
      <q-button class="mt-5" :disabled="state.showAbsSnkb" @click="state.showAbsSnkb = true">Show absolute snackbar</q-button>
      <q-snackbar v-model="state.showAbsSnkb" color="#000" close-btn-style="btn-outline" dismissable absolute>
        <span class="text-white">Custom container snackbar.</span>
      </q-snackbar>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  showSnkbInfo: false,
  showSnkbAlert: false,
  showSnkbError: false,
  showCustomSnkb: false,
  showAbsSnkb: false,
});
</script>
