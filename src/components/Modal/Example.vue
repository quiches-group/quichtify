<template>
<!--  <div>-->
<!--    <button @click="openModal()">coucou</button>-->
<!--    <modal :is-open="isOpen" :show-close-button="true">-->
<!--      <p>pd</p>-->
<!--    </modal>-->
<!--  </div>-->

  <div>
    <modal ref="modal"></modal>
    <button @click="openModal">Open Modal</button>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  name: 'Example',
  components: { Modal },
  // methods: {
  //   openModal() {
  //     this.isOpen = true;
  //   },
  // },
  methods: {
    openModal() {
      this.$refs.modal.show();
    },
  },
};
</script>
