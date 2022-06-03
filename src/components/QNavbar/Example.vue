<template>
  <div>
    <q-navbar :is-open="state.navbarIsOpen" @is-open="changeNavbarState">
      <q-navbar-content class="bg-red-500">
        <q-menu :selected-index="state.selectedIndex" @select-index="setSelectedIndex">
          <q-menu-item item-index="tab1">Swap</q-menu-item>
          <q-menu-item item-index="tab2">Stacking</q-menu-item>
          <q-menu-item item-index="tab3">Farm</q-menu-item>
          <q-menu-item item-index="tab4">Wallet</q-menu-item>
        </q-menu>
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
