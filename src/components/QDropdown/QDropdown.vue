<template>
  <div class="q-dropdown relative inline-block text-left">
    <div>
      <button
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        :class="{ 'text-gray-400': !state.selected }"
        type="button"
        @click="toggleMenu"
        @focusout="toggleMenu(false)"
      >
        {{ state.selected ?? placeholder }}
        <span id="dropdown-chevron" class="ml-3 self-center transition-transform ease-in-out duration-250" :class="{ 'rotate-180': state.menuIsOpen }" />
      </button>
    </div>

    <div
      class="q-dropdown-menu origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-shadow focus:outline-none opacity-0 pointer-events-none"
      :class="{ 'animate-fadeIn': state.menuIsOpen, 'animate-fadeOut': state.menuIsOpen === false }"
    >
      <div class="py-1">
        <span v-for="option in options" class="hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm cursor-pointer" @click="selectOption(option)">{{ option }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, reactive, watch } from 'vue';

const emit = defineEmits(['select']);

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
});

const state = reactive({
  selected: null,
  menuIsOpen: null,
});

const selectOption = (option) => {
  if (state.menuIsOpen) { toggleMenu() }
  state.selected = option;
};

const toggleMenu = (newValue) => {
  state.menuIsOpen = typeof newValue === 'boolean' ? newValue : !state.menuIsOpen;
};

watch(
  () => state.selected,
  (newValue) => {
    emit('select', newValue);
  },
);
</script>

<style scoped>
#dropdown-chevron {
  position: relative;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#dropdown-chevron:after {
  content: '';
  display: block;
  width: 2px;
  height: 8px;
  border-radius: 3px;
  background-color: rgb(55, 65, 81);
  transform-origin: 50% 100%;
  transform: translateX(-1px) rotate(-45deg);
}

#dropdown-chevron:before {
  content: '';
  display: block;
  width: 2px;
  height: 8px;
  border-radius: 3px;
  background-color: rgb(55, 65, 81);
  transform-origin: 50% 100%;
  transform: rotate(45deg);
}
</style>
