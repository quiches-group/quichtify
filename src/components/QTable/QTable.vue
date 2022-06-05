<!-- eslint-disable no-unused-vars -->
<template>
  <table class="bg-white shadow-lg border-collapse">
    <thead>
    <tr>
      <th
          v-for="header in headers"
          :key="header.value"
          :class="`text-${header.align}; ${header.sortable ? `cursor-pointer` : ''}`"
          class="px-8 py-4 text-left bg-gray-100 border"
          @click="sortLines(header)"
      >
        {{ header.text }} {{ getSortIcons(header) }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, itemKey) in pages" :key="itemKey">
      <td v-for="header in headers" :key="header.value" :class="`text-${header.align}`" class="px-8 py-4 border">
        {{ item[header.value] }}
      </td>
    </tr>
    </tbody>
    <tfoot v-if="!disablePagination">
    <tr>
      <td :colspan="headers.length" class="px-4 py-4 text-lg border">
        <div class="flex flex-row justify-end">
          <label for="page">
            Rows per page
            <input v-model="nbOfLinesToDisplay" :max="lines.length" min="1" name="page" type="number"/>
          </label>
          <span> {{ firstDisplayedLine }}-{{ lastDisplayedLine }} of {{ lines.length }} </span>
          <button class="px-2 text-2xl align-top" @click="previousPage">&lt;</button>
          <button class="text-2xl align-top" @click="nextPage">&gt;</button>
        </div>
      </td>
    </tr>
    </tfoot>
  </table>
</template>

<script setup>
import {computed, onMounted, reactive, toRefs} from 'vue';

// State
const props = defineProps({
  filter: {
    type: String,
    default: () => '',
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
    default: () => false,
  },
  rowsPerPage: {
    type: Number,
    default: () => 5,
    validator(value) {
      return value >= 1;
    },
  },
});

const state = reactive({
  sortAsc: true,
  currentPage: 1,
  nbOfLinesToDisplay: props.rowsPerPage,
  currentSortedHeader: undefined,
});

function sortItems(items) {
  if (!props.headers || !state.currentSortedHeader) {
    return items;
  }

  const sortedItems = items.sort((currentItem, nextItem) => {
    if (state.sortAsc) {
      return currentItem[state.currentSortedHeader] < nextItem[state.currentSortedHeader] ? -1 : 1;
    }

    if (!state.sortAsc) {
      return currentItem[state.currentSortedHeader] > nextItem[state.currentSortedHeader] ? -1 : 1;
    }

    return 0;
  });

  if (state.nbOfLinesToDisplay > sortedItems.length) {
    state.nbOfLinesToDisplay = items.length;
  }

  if (state.nbOfLinesToDisplay * (state.currentPage - 1) + 1 > sortedItems.length && state.currentPage > 1) {
    state.currentPage -= 1;
  }

  if (items.length > 0 && state.nbOfLinesToDisplay < 1) {
    state.nbOfLinesToDisplay = 1;
  }

  return sortedItems;
}

const lines = computed(() => {
  if (!props.filter || props.filter === '') {
    return sortItems(props.items);
  }

  const filteredItems = props.items.filter((item) => Object.values(item).join().toLowerCase().includes(props.filter.toLowerCase()));

  return sortItems(filteredItems);
});

const pages = computed(() => {
  if (props.disablePagination) {
    return lines.value;
  }

  return lines.value.filter((_, key) => {
    const startLineNb = state.nbOfLinesToDisplay * (state.currentPage - 1);
    const endLineNb = state.nbOfLinesToDisplay * state.currentPage;
    return key >= startLineNb && key < endLineNb;
  });
});

const firstDisplayedLine = computed(() => {
  const nbOfLines = lines.value.length;
  const {nbOfLinesToDisplay, currentPage} = state;

  if (nbOfLines > 0 && nbOfLinesToDisplay > 0) {
    return `${nbOfLinesToDisplay * (currentPage - 1) + 1}`;
  }

  return '0';
});

const lastDisplayedLine = computed(() => {
  const nbOfLines = lines.value.length;
  const {nbOfLinesToDisplay, currentPage} = state;

  if (nbOfLines > nbOfLinesToDisplay * currentPage) {
    return nbOfLinesToDisplay * currentPage;
  }

  return nbOfLines;
});

// Life cycle
function setDefaultSortableHeader() {
  const sortableHeaderValue = props.headers.find((header) => header.sortable).value;

  if (sortableHeaderValue) {
    state.currentSortedHeader = sortableHeaderValue;
  }

  state.currentSortedHeader = props.headers[0].value;
}

onMounted(() => {
  setDefaultSortableHeader();
});

// Template methods
function sortLines(header) {
  if (!header.sortable) {
    return;
  }

  if (header.value === state.currentSortedHeader) {
    state.sortAsc = !state.sortAsc;
    return;
  }

  state.sortAsc = true;
  state.currentSortedHeader = header.value;
}

function getSortIcons(header) {
  if (state.currentSortedHeader !== header.value) return '';
  return state.sortAsc ? '▼' : '▲';
}

function nextPage() {
  if (state.currentPage > Math.floor(lines.value.length / state.nbOfLinesToDisplay)) {
    return;
  }

  state.currentPage += 1;
}

function previousPage() {
  if (state.currentPage <= 1) {
    return;
  }

  state.currentPage -= 1;
}

// Reactive variables used in <template>
const {nbOfLinesToDisplay} = toRefs(state);
</script>
