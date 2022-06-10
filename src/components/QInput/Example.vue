<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="p-2">
    <q-input v-model="value" placeholder="Placeholder" error="Voici l'erreur"></q-input>
    <q-input v-model="value" placeholder="Placeholder" background-color="red" disabled></q-input>
    <q-input v-model="value" placeholder="Placeholder" error="Voici l'erreur" outline></q-input>
    <q-input v-model="value" placeholder="Placeholder" outline background-color="rgb(36, 37, 38)"></q-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>
