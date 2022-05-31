<template>
  <div>
    <modal ref="modal"></modal>
    <button @click="openModal">Open Modal</button>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'Example',
  components: { Modal },
  methods: {
    openModal() {
      this.$refs.modal.show();
    },
  },
};
</script>
