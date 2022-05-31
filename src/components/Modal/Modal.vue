<template>
<!--  <div v-if="isOpen" id="open-modal" class="modal-window">-->
<!--    <button v-if="showCloseButton" @click="closeModal()">Close</button>-->
<!--    <slot/>-->
<!--  </div>-->

  <div v-if="showModal">
    <div id="modal">
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
  props: ['isOpen', 'showCloseButton'],
  // props: {
  //   isOpen: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   showCloseButton: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {
  //     open: true,
  //   };
  // },
  // methods: {
  //   closeModal() {
  //     this.open = false;
  //     // this.$emit('update:dialogEdit', false);
  //     console.log('test', this.isOpen);
  //   },
  // },
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
