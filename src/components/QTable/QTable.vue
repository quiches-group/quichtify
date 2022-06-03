<template>
  <table class="shadow-lg bg-white border-collapse">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.value"
          :class="`text-${header.align}; ${header.sortable ? `cursor-pointer` : ''}`"
          class="bg-gray-100 border text-left px-8 py-4"
          @click="header.sortable ? sort(header.value) : null"
        >
          {{ header.text }} {{ sortIcons(header) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, itemKey) in createPages(sortItems(filterItems()))" :key="itemKey">
        <td v-for="header in headers" :key="header.value" :class="`text-${header.align}`" class="border px-8 py-4">
          {{ item[header.value] }}
        </td>
      </tr>
    </tbody>
    <tfoot v-if="!disablePagination">
      <tr>
        <td :colspan="headers.length" class="border px-4 py-4 text-lg">
          <div class="flex flex-row justify-end">
            <div class="h-100%">
              <label for="page"
                >Rows per page
                <input v-model="rowsPerPageMutable" :max="sortItems(filterItems()).length" min="1" name="page" type="number" />
              </label>
            </div>
            <div class="h-100%">
              <span>
                {{ sortItems(filterItems()).length > 0 && rowsPerPageMutable > 0 ? rowsPerPageMutable * (currentPageMutable - 1) + 1 : 0 }}-{{
                  sortItems(filterItems()).length > rowsPerPageMutable * currentPageMutable ? rowsPerPageMutable * currentPageMutable : sortItems(filterItems()).length
                }}
                of {{ sortItems(filterItems()).length }}
              </span>
              <button class="px-2 text-2xl align-top" @click="previousPage">&lt;</button>
              <button class="text-2xl align-top" @click="nextPage">&gt;</button>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
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
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  disablePagination: {
    type: Boolean,
    default: false,
  },
  rowsPerPage: {
    type: Number,
    default: 5,
    validator(value) {
      return value >= 1;
    },
  },
  currentPage: {
    type: Number,
    default: 1,
    validator(value) {
      return value >= 1;
    },
  },
});

const sortedHeader = ref(() => (props.headers.find((header) => header.sortable).value ? props.headers.find((header) => header.sortable).value : props.headers[0].value));
const sortAsc = ref(true);
const rowsPerPageMutable = ref(props.rowsPerPage);
const currentPageMutable = ref(props.currentPage);
const sort = (header) => {
  if (header === sortedHeader.value) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortAsc.value = true;
    sortedHeader.value = header;
  }
};
const sortItems = (items) => {
  if (!props.headers) return items;
  if (!sortedHeader.value) return items;
  const sortedItems = items.sort((a, b) => {
    if (sortAsc.value) return a[sortedHeader.value] < b[sortedHeader.value] ? -1 : 1;
    if (!sortAsc.value) return a[sortedHeader.value] > b[sortedHeader.value] ? -1 : 1;
    return 0;
  });
  if (rowsPerPageMutable.value > sortedItems.length) rowsPerPageMutable.value = items.length;
  if (rowsPerPageMutable.value * (currentPageMutable.value - 1) + 1 > sortedItems.length && currentPageMutable.value > 1) currentPageMutable.value -= 1;
  if (items.length > 0 && rowsPerPageMutable.value < 1) rowsPerPageMutable.value = 1;

  return sortedItems;
};
const sortIcons = (header) => {
  if (sortedHeader.value !== header.value) return '';
  return sortAsc.value ? '▼' : '▲';
};

const filterItems = () => {
  if (!props.filter || props.filter === '') return props.items;
  return props.items.filter((item) => Object.values(item).join().toLowerCase().includes(props.filter.toLowerCase()));
};

const createPages = (items) => {
  if (props.disablePagination) return items;
  return items.filter((item, key) => {
    const start = rowsPerPageMutable.value * (currentPageMutable.value - 1);
    const end = rowsPerPageMutable.value * currentPageMutable.value;
    return key >= start && key < end;
  });
};
const nextPage = () => {
  if (currentPageMutable.value < Math.fround(sortItems(filterItems()).length / rowsPerPageMutable.value)) {
    currentPageMutable.value += 1;
  }
};
const previousPage = () => {
  if (currentPageMutable.value > 1) {
    currentPageMutable.value -= 1;
  }
};
</script>
