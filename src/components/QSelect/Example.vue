@@ -1,7 +1,22 @@
<template>
  <q-select placerholder="hello" :options="randomEmojiArray" />
</template>

<script>
import QSelect from './QSelect.vue';

export default {
  components: { QSelect },
  data() {
    return {
      randomEmojiArray: ['😀😎🙁🤯', '😀😡🥶🫡', '😀😶🫥🫣', '😀🥹😻'],
    };
  },
};
</script>
