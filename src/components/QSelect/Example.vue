<template>
  <main class="flex justify-center h-screen items-center">
    <q-select placerholder="hello" :options="randomEmojiArray" @select="selectItem" />
  </main>
</template>

<script setup>
const randomEmojiArray = ['😀😎🙁🤯', '😀😡🥶🫡', '😀😶🫥🫣', '😀🥹😻', 'Ceci est un test !'];

const selectItem = (item) => {
  console.log(item);
};
</script>
