<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <q-snack-bar message="Coucou les ptis loups" color="success" variant="outline" color-text="black" color-button="primary" :open="true"/>
  </div>
</template>

<script setup>
import QSnackBar from './QSnackBar.vue';
</script>
