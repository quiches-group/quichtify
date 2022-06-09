<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-graph :options="options" height="600"/>
</template>

<script setup>
import { reactive } from 'vue';
import QGraph from './QGraph.vue';

const options = reactive({
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
setInterval(() => {
  options.series[0].data.push(Math.random() * 10);
  options.series[0].data.shift();
}, 1000);
</script>
