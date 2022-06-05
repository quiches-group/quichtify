<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-drag-and-drop :columns-of-items="state.columnOfItems" />
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  columnOfItems: [
    {
      id: 1,
      title: 'TODO',
      items: [
        { id: 1, title: 'Titre 1' },
        { id: 2, title: 'Titre 2' },
      ],
    },
    { id: 2, title: 'IN PROGRESS', items: [{ id: 3, title: 'Titre 3' }] },
    { id: 3, title: 'DONE', items: [{ id: 4, title: 'Titre 4' }] },
  ],
});
</script>
