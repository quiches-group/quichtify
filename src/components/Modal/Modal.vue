<template>
  <div v-if="isOpen" id="open-modal" class="modal-window">
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
  },
  data() {},
};
</script>

<style scoped>

</style>
