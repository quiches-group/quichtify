<template>
  <div class="q-input">
    <input
      :value="modelValue"
      :type="inputType"
      :disabled="disabled"
      :class="classes"
      :placeholder="placeholder"
      :style="style"
      @input="emit('update:modelValue', $event.target.value), emit('input', $event)"
    />
    <p v-if="showError" class="q-input--error">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed, defineEmits } from "vue";

const emit = defineEmits(["update:modelValue", "input"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: false,
    default: null,
  },
  outline: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  backgroundColor: {
    type: String,
    required: false,
    default: null,
  },
  inputType: {
    type: String,
    required: false,
    default: "text",
  },
})

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const showError = computed(() => !!props.error);

const classes = computed(() => {
  const classesArray = [];

  if (props.outline) {
    classesArray.push("border");
    classesArray.push("border-slate-500");
    classesArray.push("focus:border-slate-500");

    if (showError.value) {
      classesArray.push("border-rose-500");
      classesArray.push("focus:border-rose-500");
    }
  }

  return classesArray.join(" ");
});
</script>

<style>
.q-input {
  @apply relative
    flex
    flex-col
    space-y-1;
}

.q-input input {
  @apply m-0
    p-3
    rounded-lg
    focus:outline-none;
}

.q-input--error {
  @apply absolute
    -top-0.5
    left-3
    max-w-prose
    text-red-700
    text-xs
    content-start;
}
</style>
