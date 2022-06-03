<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-menu :selected-index="state.selectedIndex" @select-index="setSelectedIndex">
      <q-menu-item item-index="tab1">Swap</q-menu-item>
      <q-menu-item item-index="tab2">Stacking</q-menu-item>
      <q-menu-item item-index="tab3">Farm</q-menu-item>
      <q-menu-item item-index="tab4">Wallet</q-menu-item>
    </q-menu>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({
  selectedIndex: null,
});
const setSelectedIndex = (index) => {
  state.selectedIndex = index;
};

</script>
