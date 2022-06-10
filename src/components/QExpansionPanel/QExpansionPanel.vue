<template>
    <div class="q-panel shadow-black-500/50" :class="panelClasses">
      <button :disabled="props.disabled" class="q-panel__button" type="button" @click="togglePanel">
        <slot name="header"/>
        <q-chevron :accent-color="props.accentColor" :state="state.panelIsOpen" class="ml-auto"/>
      </button>

      <q-separator class="mx-5 w-auto"/>

      <div class="q-panel__content-container">
        <div>
          <slot name="content"/>
        </div>
      </div>
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
  showSeparator: {
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
  const classes = [];

  if (state.panelIsOpen) {
    classes.push('q-panel--opened')
  }

  if (!props.disableAnimation) {
    classes.push('q-panel--animated');
  }

  return classes;
});

const togglePanel = () => {
  state.panelIsOpen = !state.panelIsOpen
};
</script>

<style lang="scss">
.q-panel {
  @apply rounded-lg border bg-white border-gray-200 shadow-lg overflow-hidden;

  &--animated {
    .q-panel__content-container {
      @apply transition-all duration-300 ease-in-out;
    }
  }

  &__button {
    @apply relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 disabled:opacity-30 mb-0;
  }

  &__content-container {
    @apply max-h-0;

    & > div {
      @apply py-4 px-5
    }
  }

  &--opened {
    .q-panel__content-container {
      @apply max-h-screen mb-2;
    }
  }
}
</style>
