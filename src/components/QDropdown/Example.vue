<template>
  <main class="flex justify-center h-screen items-center">
    <q-dropdown placeholder="Placeholder" :options="randomEmojiArray" @select="selectItem" />
  </main>
</template>

<script setup>
const randomEmojiArray = ['😀😎🙁🤯', '😀😡🥶🫡', '😀😶🫥🫣', '😀🥹😻', 'Ceci est un test !'];

const selectItem = (item) => {
  console.log(item);
};
</script>
