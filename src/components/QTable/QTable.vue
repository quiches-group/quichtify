<template>
  <table>
    <tr v-if="headers">
      <th
          v-for="header
          in headers"
          :key="header.value"
          :class="`text-${header.align}`"
          @click="sortCol(header.value, items)">
        {{ header.text }}
      </th>
    </tr>
    <tr v-for="(item, itemKey) in items" :key="itemKey">
      <td v-for="header in headers" :key="header.value" :class="`text-${header.align}`">
        {{ item[header.value] }}
      </td>
    </tr>
  </table>
</template>

<script setup>
import {computed, ref} from 'vue';

defineProps({
  headers: {
    type: Object,
    default: null,
  },
  items: {
    type: Object,
    default: null,
    required: true,
  },
});

const sortAsc = ref(true);
const currentSort = ref('name');

const sort = (header) => {
  if (header === this.currentSort) {
    this.sortAsc = !this.sortAsc;
  }
  this.sortAsc = true;
  this.currentSort = header;
};

const sortCol = computed(() => this.items.sort((a, b) => {
  let modifier = 1;
  if (!this.sortAsc) modifier = -1;
  if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
  if (a[this.currentSort] > b[this.currentSort]) return modifier;
  return 0;
}),);
</script>
