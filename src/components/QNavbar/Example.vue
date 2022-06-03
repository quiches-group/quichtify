<template>
  <div>
    <q-navbar :is-open="state.navbarIsOpen" @is-open="changeNavbarState">
      <q-navbar-content class="bg-red-500">
      </q-navbar-content>
    </q-navbar>
    <button @click="changeNavbarState()">Open navbar</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  navbarIsOpen: true,
  selectedIndex: null,
})
const setSelectedIndex = (index) => {
  state.selectedIndex = index;
};
const changeNavbarState = (newValue = null) => {
  state.navbarIsOpen = newValue ?? !state.navbarIsOpen
}
</script>
