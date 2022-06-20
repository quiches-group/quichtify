<template>
  <div class="q-dropdown relative inline-block text-left">
    <div>
      <button
        :disabled="props.disabled"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 disabled:opacity-40"
        :class="{ 'text-gray-400': !state.selected }"
        :style="`
          color: ${textColor};
          background-color: ${bgColor}
        `"
        type="button"
        @click="toggleMenu"
        @focusout="toggleMenu(false)"
      >
        {{ state.selected ?? placeholder }}
        <q-chevron :accent-color="props.accentColor" class="ml-3" :state="state.menuIsOpen"/>
      </button>
    </div>

    <div
      class="q-dropdown-menu origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-shadow focus:outline-none opacity-0 pointer-events-none z-10"
      :class="{ 'q-animate-fadeIn': state.menuIsOpen, 'q-animate-fadeOut': state.menuIsOpen === false }"
    >
      <div class="py-1">
        <span
            v-for="option in options"
            :key="option"
            class="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm cursor-pointer"
            @click="selectOption(option)"
        >
          {{ option }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import QChevron from '../QChevron/QChevron.vue';

const emit = defineEmits(['select']);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  accentColor: {
    type: String,
    default: () => 'rgb(55, 65, 81)',
  },
  textColor: {
    type: String,
    default: () => 'rgb(55, 65, 81)',
  },
  bgColor: {
    type: String,
    default: () => 'white',
  },
});

const state = reactive({
  selected: null,
  menuIsOpen: null,
});

const toggleMenu = (newValue) => {
  state.menuIsOpen = typeof newValue === 'boolean' ? newValue : !state.menuIsOpen;
};

const selectOption = (option) => {
  if (state.menuIsOpen) {
    toggleMenu();
  }

  state.selected = option;
};

watch(
  () => state.selected,
  (newValue) => {
    emit('select', newValue);
  },
);
</script>
