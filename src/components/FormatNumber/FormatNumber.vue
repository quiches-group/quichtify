<template>
  <div v-text="formatted" />
</template>

<script>
export default {
  name: 'q-format-number',
  props: {
    value: {
      type: [Number, String],
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
  },
  computed: {
    formatted() {
      return new Intl.NumberFormat(this.locale, {
        style: this.currency ? 'currency' : 'decimal',
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits,
        minimumIntegerDigits: this.minIntegerDigits,
        useGrouping: this.useGrouping,
      }).format(this.value);
    },
  },
};
</script>

<style scoped>

</style>
