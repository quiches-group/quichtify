<template>
  <canvas ref="graphCanvas" class="w-full min-w-full max-w-full" :style="{ height: props.height }" />
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const graphCanvas = ref(null);
let charts = null;

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  height: {
    type: Number,
    default: 300,
  },
});

const resizeChart = () => {
  charts.resize({
    width: getComputedStyle(graphCanvas.value).width,
    height: props.height
  });
};

onMounted(() => {
  charts = echarts.init(graphCanvas.value);
  charts.setOption(props.options);

  resizeChart();

  window.addEventListener('resize', resizeChart);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeChart);
  charts.dispose();
});

watch(props.options, (newOptions) => {
  if (charts) {
    charts.setOption(newOptions);
  }
});
</script>

