<template>
  <div>
    <q-modal :is-open="state.showModal" button-text="I accept" modal-title="Test modal" background-color="white" @modal-state-change="buttonAction">
      <q-modal-content>
        <p>This is my modal, do you accept it ?</p>
        <button class="flex items-end mt-6" @click="buttonAction(false)">Close</button>
      </q-modal-content>
    </q-modal>
    <button @click="buttonAction(true)">Open Modal</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  showModal: false,
});

const buttonAction = (newValue) => {
  state.showModal = newValue;
};
</script>
