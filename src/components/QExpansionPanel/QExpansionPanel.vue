<template>
    <div class="q-panel shadow-black-500/50" :class="panelClasses" :style="style">
      <button :disabled="props.disabled" type="button" @click="togglePanel">
        <slot name="header"/>
        <q-chevron :accent-color="props.accentColor" :state="state.panelIsOpen" class="ml-auto"/>
      </button>

      <div class="q-panel__content-container">
        <q-separator v-if="showSeparator"/>

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
  headerBackgroundColor: {
    type: String,
    default: '#ffffff',
  },
  contentBackgroundColor: {
    type: String,
    default: '#ffffff',
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

const style = computed(() => ({
  '--header-bg-color': props.headerBackgroundColor,
  '--content-bg-color': props.contentBackgroundColor,
}));

const togglePanel = () => {
  state.panelIsOpen = !state.panelIsOpen
};
</script>

<style lang="scss" scoped>
.q-panel {
  @apply rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.95,0.05,0.05,0.95)];

  &--animated {
    .q-panel__content-container {
      @apply transition-all duration-300 ease-[cubic-bezier(0.95,0.05,0.05,0.95)]
    }
  }

  & > button {
    @apply relative flex items-center w-full py-4 px-5 text-base text-left border-0 disabled:opacity-30 mb-0;
    background-color: var(--header-bg-color);
  }

  &__content-container {
    @apply max-h-0 m-0;
    background-color: var(--content-bg-color);

    & > div {
      @apply py-4 px-5
    }
  }

  &--opened {
    @apply mb-2;

    .q-panel__content-container {
      @apply max-h-screen;
    }
  }
}
</style>
