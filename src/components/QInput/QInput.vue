<template>
  <input type="text" v-bind:placeholder="placeholder" v-bind:value="value">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
  }
}
</script>

<style scoped>
</style>
