<template>
  <div v-if="isOpen" id="open-modal" class="modal-window">
    <button v-if="showCloseButton" @click="closeModal()">Close</button>
    <slot/>
  </div>
</template>

<script>
import './Modal.scss';

export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    showCloseButton: {
      type: Boolean,
      required: true,
    },
  },
  data() {},
  methods: {
    closeModal() {
      // TODO: finish to create prop to close modal
    },
  },
};
</script>

<style scoped>

</style>
