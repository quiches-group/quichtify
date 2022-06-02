<template>
  <q-input v-model="value" placeholder="Placeholder" error="Voici l'erreur"></q-input>
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
