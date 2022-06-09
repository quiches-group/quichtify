<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <q-snack-bar message="Alert message just here !" position="top-center" color-background="primary" variant="shaped" color-text="white" color-button="white" :open="true"/>
    <q-snack-bar message="Alert message just here !" position="top-right" color-background="success" variant="outline" color-text="black" color-button="primary" :open="true"/>
    <q-snack-bar message="Alert message just here !" position="top-left" color-background="error" variant="tile" color-text="darkgray" color-button="secondary" :open="true"/>
    <q-snack-bar message="Alert message just here !" position="bottom-center" color-background="warning" variant="rounded" color-text="black"  :open="true"/>
    <q-snack-bar message="Alert message just here !" position="bottom-right" color-background="secondary" variant="shaped" color-text="black" color-button="primary" :open="true"/>
    <q-snack-bar message="Alert message just here !" position="bottom-left" color-background="success" variant="rounded" color-text="white" color-button="secondary" :open="true"/>
  </div>
</template>

<script setup>
import QSnackBar from './QSnackBar.vue';
</script>
