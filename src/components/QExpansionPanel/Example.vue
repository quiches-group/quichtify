<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class=" justify-center h-screen items-center">
    <q-expansion-panels :selected-index="state.selectedIndex" @select-index="setSelectedIndex">
      <q-expansion-panel panel-index="tab1">
        <template #header>
          <h3>Header du panneau</h3>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          euismod nulla vitae odio pharetra maximus. In hac habitasse platea
          dictumst. Sed maximus dolor eget massa fringilla congue. In tellus
          ligula, pharetra in faucibus eu, hendrerit et elit. Vestibulum pellentesque,
          dolor sed gravida porttitor, diam turpis gravida odio, dapibus dictum magna
          turpis sodales augue. Sed in dapibus lorem. Duis sed elit tincidunt, ultrices
          enim vel, vehicula ex.
        </template>
      </q-expansion-panel>
      <q-expansion-panel panel-index="tab2" >
        <template #header>
          <h3>Header du panneau</h3>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          euismod nulla vitae odio pharetra maximus. In hac habitasse platea
          dictumst. Sed maximus dolor eget massa fringilla congue. In tellus
          ligula, pharetra in faucibus eu, hendrerit et elit. Vestibulum pellentesque,
          dolor sed gravida porttitor, diam turpis gravida odio, dapibus dictum magna
          turpis sodales augue. Sed in dapibus lorem. Duis sed elit tincidunt, ultrices
          enim vel, vehicula ex.
        </template>
      </q-expansion-panel>
      <q-expansion-panel panel-index="tab3" >
        <template #header>
          <h3>Header du panneau</h3>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          euismod nulla vitae odio pharetra maximus. In hac habitasse platea
          dictumst. Sed maximus dolor eget massa fringilla congue. In tellus
          ligula, pharetra in faucibus eu, hendrerit et elit. Vestibulum pellentesque,
          dolor sed gravida porttitor, diam turpis gravida odio, dapibus dictum magna
          turpis sodales augue. Sed in dapibus lorem. Duis sed elit tincidunt, ultrices
          enim vel, vehicula ex.
        </template>
      </q-expansion-panel>
    </q-expansion-panels>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import QExpansionPanel from './QExpansionPanel.vue';
import QExpansionPanels from './QExpansionPanels.vue';

const state = reactive({
  selectedIndex: 'tab2',
});

const setSelectedIndex = (index) => {
  state.selectedIndex = index;
};

</script>
