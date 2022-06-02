<template>
  <header
      class="q-navbar w-screen h-screen fixed top-0 left-0 w-full h-full md:static"
      :class="{ 'pointer-events-none': !isOpen }"
      @click="close"
  >
    <div
        class="right-0 top-0 w-auto h-screen fixed transition-transform md:h-auto md:w-screen md:static md:translate-x-0"
        :class="{ 'translate-x-full': !isOpen, 'q-navbar--active': isOpen }"
        @click="stopPropagation"
    >
      <slot/>
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['isOpen'])

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
})

const close = () => {
  emit('isOpen', false)
}

const stopPropagation = (e) => {
  e.stopPropagation()
}
</script>
