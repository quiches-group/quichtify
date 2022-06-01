<template>
  <div class="aligner">
    <input class="q-input" type="text" v-bind:placeholder="placeholder" v-bind:value="value">
    <p class="q-input-error" v-if="showError">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  },

  computed: {
    showError: function () {
      return this.error !== "";
    }
  }
}
</script>

<style>
.aligner {
  @apply
    content-start
}

.q-input {
  @apply
    rounded-md
    border-4 border-transparent border-b-indigo-500
    focus:shadow-none focus:outline-none;
}

.q-input-error {
  @apply
    text-red-700
    text-xs
}
</style>
