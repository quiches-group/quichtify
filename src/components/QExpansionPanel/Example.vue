<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="justify-center h-screen items-center">
    <q-expansion-panels>
      <q-expansion-panel :accent-color="'rgb(97, 67, 210)'" animated panel-index="panel1">
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
      <q-expansion-panel animated panel-index="panel2">
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
      <q-expansion-panel panel-index="panel3">
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
