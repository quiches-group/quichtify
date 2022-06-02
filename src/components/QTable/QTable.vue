<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.value" :class="`text-${header.align}`" class="cursor-pointer" @click="sort(header.value)">
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, itemKey) in createPages(sortItems(filterItems()))" :key="itemKey">
        <td v-for="header in headers" :key="header.value" :class="`text-${header.align}`">
          {{ item[header.value] }}
        </td>
      </tr>
    </tbody>
    <tfoot v-if="!disablePagination">
      <tr>
        <td :colspan="headers.length">
          <div class="text-right">
            <label for="page"
              >Rows per page
              <input v-model="rowsPerPageMutable" :max="sortItems(filterItems()).length" min="1" name="page" type="number" />
            </label>
            <label for="page"
              >{{ rowsPerPageMutable * (currentPageMutable - 1) + 1 }}-{{
                sortItems(filterItems()).length > rowsPerPageMutable * currentPageMutable ? rowsPerPageMutable * currentPageMutable : sortItems(filterItems()).length
              }}
              of
              {{ sortItems(filterItems()).length }}
              <button @click="previousPage">&lt;</button>
              <button @click="nextPage">&gt;</button>
              <!--              <input :max="Math.floor(items.length / rowsPerPage)" :value="currentPage" min="1" name="page" type="number" @input="createPages(items)" />-->
            </label>
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

const sortedHeader = ref(props.headers ? props.headers[0].value : null);
const sortAsc = ref(true);
const rowsPerPageMutable = ref(props.rowsPerPage);
const currentPageMutable = ref(props.currentPage);

const sort = (header) => {
  if (!props.headers) return;
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
  return sortedItems;
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
}
