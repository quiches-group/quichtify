<template>
  <div>
    <modal :is-open="true">
      <p>Bonjour</p>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'Example',
  components: { Modal },
};
</script>
