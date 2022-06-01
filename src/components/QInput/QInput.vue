<template>
  <label class="q-input-label"
    >{{ title }}
    <input :value="modelValue" class="q-input" type="text" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" />
    <p v-if="showError" class="q-input-error">{{ error }}</p>
  </label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },

    placeholder: {
      type: String,
      required: false,
    },

    modelValue: {
      type: String,
      required: true,
    },

    error: {
      type: String,
      required: false,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    showError() {
      return this.error !== '';
    },
  },
};
</script>

<style>
.q-input-label {
  @apply flex
    flex-col
    space-y-1
    pb-5;
}

.q-input {
  @apply border-4 border-transparent border-b-primary border-r-0 border-l-0
    focus:shadow-none focus:outline-none;
}

.q-input-error {
  @apply absolute bottom-0
    max-w-prose
    text-red-700
    text-xs
    content-start;
}
</style>
