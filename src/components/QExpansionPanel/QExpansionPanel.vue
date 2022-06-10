<template>
    <div class="q-panel rounded-lg border bg-white border-gray-200 shadow-lg shadow-black-500/50" :class="{ 'mb-2': state.panelIsOpen }">
      <h2 class="accordion-header mb-0">
        <button :disabled="props.disabled" class="q-expansion-panel-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 disabled:opacity-30" type="button" @click="togglePanel">
          <slot name="header"/>
          <q-chevron :accent-color="props.accentColor" :state="state.panelIsOpen" class="ml-auto"/>
        </button>
      </h2>
      <transition
          :class="panelClasses"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
      >
        <div v-show="state.panelIsOpen">
          <div class="slide__slot-container transition py-4 px-5">
            <slot name="content"/>
          </div>
        </div>
      </transition>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import QChevron from '../QChevron/QChevron.vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  disableAnimation: {
    type: Boolean,
    default: false
  },
  accentColor: {
    type: String,
    default: () => 'rgb(55, 65, 81)',
  },
});

const state = reactive({
  panelIsOpen: false,
});

const panelClasses = computed(() => {
  const classes = ['slide'];
  if (!props.disableAnimation) {
    classes.push('slide-enter-active')
    classes.push('slide-leave-active')
  }
  return classes;
});

const togglePanel = () => {
  state.panelIsOpen = !state.panelIsOpen
};

// Animation methods
const enter = (el) => {
  // eslint-disable-next-line no-param-reassign
  el.style.height = 'auto';
  const {height} = getComputedStyle(el);
  // eslint-disable-next-line no-param-reassign
  el.style.height = 0;
  getComputedStyle(el);
  setTimeout(() => {
    // eslint-disable-next-line no-param-reassign
    el.style.height = height;
  });
};
const afterEnter = (el) => {
  // eslint-disable-next-line no-param-reassign
  el.style.height = 'auto';
};
const leave = (el) => {
  // eslint-disable-next-line no-param-reassign
  el.style.height = getComputedStyle(el).height;

  getComputedStyle(el);
  setTimeout(() => {
    // eslint-disable-next-line no-param-reassign
    el.style.height = 0;
  });
};
</script>

<style lang="scss" scoped>
.slide {
  &.slide-leave-active, &.slide-enter-active {
    @apply transition-all duration-300 ease-in-out overflow-hidden
  }
}
</style>
