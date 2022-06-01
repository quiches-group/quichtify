<template>
  <table>
    <tr v-if="headers">
      <th v-for="header in headers" :key="header.value" :class="`text-${header.align}`" class="cursor-pointer" @click="sort(header.value)">
        {{ header.text }}
      </th>
    </tr>
    <tr v-for="(item, itemKey) in sortItems(filterItems())" :key="itemKey">
      <td v-for="header in headers" :key="header.value" :class="`text-${header.align}`">
        {{ item[header.value] }}
      </td>
    </tr>
  </table>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  filter: {
    type: String,
    default: '',
  },
  headers: {
    type: Array,
    default: null,
  },
  items: {
    type: Array,
    default: null,
    required: true,
  },
});

const sortedHeader = ref(props.headers[0].value);
const sortAsc = ref(true);

const sort = (header) => {
  if (header === sortedHeader.value) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortAsc.value = true;
    sortedHeader.value = header;
  }
};

const sortItems = (items) => {
  if (!sortedHeader.value) return items;
  return items.sort((a, b) => {
    if (sortAsc.value) return a[sortedHeader.value] < b[sortedHeader.value] ? -1 : 1;
    if (!sortAsc.value) return a[sortedHeader.value] > b[sortedHeader.value] ? -1 : 1;
    return 0;
  });
};

const filterItems = () => {
  if (!props.filter || props.filter === '') return props.items;
  return props.items.filter((item) => Object.values(item).join().toLowerCase().includes(props.filter.toLowerCase()));
};
</script>
