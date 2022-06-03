<template>
  <p v-text="formattedText" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  locale: {
    type: String,
    default: navigator.language,
  },
  currency: {
    type: String,
    default: undefined,
  },
  currencyDisplay: {
    type: String,
    default: 'symbol',
  },
  minFractionDigits: {
    type: Number,
    default: undefined,
  },
  maxFractionDigits: {
    type: Number,
    default: undefined,
  },
  minIntegerDigits: {
    type: Number,
    default: undefined,
  },
  useGrouping: {
    type: Boolean,
    default: true,
  },
});

const formattedText = computed(() =>
  new Intl.NumberFormat(props.locale, {
    style: props.currency ? 'currency' : 'decimal',
    currency: props.currency,
    currencyDisplay: props.currencyDisplay,
    minimumFractionDigits: props.minFractionDigits,
    maximumFractionDigits: props.maxFractionDigits,
    minimumIntegerDigits: props.minIntegerDigits,
    useGrouping: props.useGrouping,
  }).format(props.value),
);
</script>

<style scoped></style>
