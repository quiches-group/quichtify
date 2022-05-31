<template>
  <div v-if="showModal" id="open-modal" class="modal-window">
    <div class="button-close">
      <button v-if="showCloseButton" @click="hide">Close</button>
    </div>
      <p>Hello i am a modal
      </p>
      <button @click="hide">Close</button>
    </div>
  </div>
</template>

<script>
import './Modal.scss';

export default {
  name: 'Modal',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>

</style>
