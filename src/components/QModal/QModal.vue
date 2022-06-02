<template>
  <div
      v-if="isOpen"
      class="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 opacity-0 pointer-events-none"
      :class="{ 'animate-fadeIn': isOpen, 'animate-fadeOut': isOpen === false, 'opacity-background': isOpen}"
      @click="close"
  >
    <div
        class="q-modal flex flex-col modal-window rounded-lg min-w-64 min-l-52 text-left max-h-screen max-w-screen shadow-2xl"
        @click="modalClick"
        :style="style"
    >
      <h1 class="py-3.5 pl-6 text-lg font-semibold border-b-2 border-darkgray">{{ modalTitle }}</h1>
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const emit = defineEmits(['modalStateChange'])

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  modalTitle: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
});

const close = (e) => {
  emit('modalStateChange', false)
}

const modalClick = (e) => {
  e.stopPropagation();
}

const style = reactive({
  backgroundColor: props.backgroundColor,
});

</script>

<style>
.q-modal {
  min-width: 25rem;
  min-height: 12rem;
}

.opacity-background {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
