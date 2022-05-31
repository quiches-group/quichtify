<template>
  <input type="text" v-bind:placeholder="placeholder" :style=backgroundColor>
</template>

<script>
export default {
  name: 'q-input',

  props: ['placeholder', 'color'],
  data() {
    return {
      hovering: false,
    };
  },
  computed: {
    backgroundColor() {
      return `background-color: ${this.hovering}` ? this.color : 'red';
    },
  },
};
</script>

<style scoped>
</style>
