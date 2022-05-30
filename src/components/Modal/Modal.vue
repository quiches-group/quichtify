<template>
  <div class="container">
    <div class="interior">
      <a class="btn" href="#open-modal">Modal ! :)</a>
    </div>
  </div>
  <div id="open-modal" class="modal-window">
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
