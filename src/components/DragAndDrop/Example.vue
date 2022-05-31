<template>
  <div>
    <DragAndDrop :item="data"></DragAndDrop>
  </div>
</template>

<script>
import DragAndDrop from './DragAndDrop.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Example',
  components: { DragAndDrop },
  data() {
    return {
      data: [
        { id: 1, title: 'Titre 1' },
        { id: 2, title: 'Titre 2' },
        { id: 3, title: 'Titre 3' },
      ],
    };
  },
};
</script>
