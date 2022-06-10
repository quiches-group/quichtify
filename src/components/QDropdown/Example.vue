<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex justify-center h-screen items-center">
    <q-dropdown placeholder="Placeholder" :options="randomEmojiArray" :accent-color="'rgb(55, 65, 81)'" @select="selectItem" />
  </main>
</template>

<script setup>
const randomEmojiArray = ['😀😎🙁🤯', '😀😡🥶🫡', '😀😶🫥🫣', '😀🥹😻', 'Ceci est un test !'];

const selectItem = (item) => {
  /* eslint-disable no-console */
  console.log(item);
};
</script>
