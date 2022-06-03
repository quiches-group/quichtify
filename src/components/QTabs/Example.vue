<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-tabs :selected-index="state.selectedIndex" @select-index="setSelectedIndex">
    <q-tab tab-index="tab1">Tab 1</q-tab>
    <q-tab tab-index="tab2">Tab 2</q-tab>
    <q-tab>Tab 3</q-tab>
  </q-tabs>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  selectedIndex: 'tab2',
});

const setSelectedIndex = (index) => {
  state.selectedIndex = index;
};
</script>
