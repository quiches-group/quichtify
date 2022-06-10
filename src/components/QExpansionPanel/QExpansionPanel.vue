<template>
    <div class="rounded-lg q-panel border bg-white border-gray-200 shadow-lg shadow-black-500/50"  :class="{ 'mb-2': state.panelIsOpen }" :data-panel-index="panelIndex">
      <h2 class="accordion-header mb-0">
        <button class="relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0" type="button" @click="togglePanel">
          <slot name="header"/>
          <span id="dropdown-chevron" class="ml-auto self-center transition-transform ease-in-out duration-250" :class="{ 'rotate-180': state.panelIsOpen }"/>
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

const props = defineProps({
  animated: {
    type: Boolean,
    default: false
  },
  panelIndex: {
    type: String,
    default: null,
  }
});

const state = reactive({
  panelIsOpen: false,
});

const panelClasses = computed(() => {
  const classes = ['slide'];
  if (props.animated) {
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

#dropdown-chevron {
  @apply relative w-3 h-3 flex justify-center items-center;
}

#dropdown-chevron:after {
  content: '';
  border-radius: 3px;
  background-color: rgb(55, 65, 81);
  transform-origin: 50% 100%;
  transform: translateX(-1px) rotate(-45deg);
  @apply block w-0.5 h-3
}

#dropdown-chevron:before {
  content: '';
  border-radius: 3px;
  background-color: rgb(55, 65, 81);
  transform-origin: 50% 100%;
  transform: rotate(45deg);
  @apply block w-0.5 h-3
}
</style>
