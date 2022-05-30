<template>
  <div>
    <button @click="openModal()">coucou</button>
    <modal :is-open="isOpen">
      <p>pd</p>
    </modal>
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
  methods: {
    openModal() {
      this.isOpen = true;
    },
  },
};
</script>
