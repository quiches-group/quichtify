<template>
  <div v-if="isShowed" :class="classes" :style="styles">
    <div class="content">
      <slot />
    </div>

    <div v-if="dissmissable" class="close-btn">
      <slot name="close-btn">
        <q-button size="small" :variant="closeBtnVariant" color="white" animation="none" @click="close">Close</q-button>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue', 'close']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  dissmissable: {
    type: Boolean,
    default: true,
  },
  absolute: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
  position: {
    type: String,
    default: 'bottom',
    validator(value) {
      return ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'].includes(value);
    },
  },
  color: {
    type: String,
    default: 'info',
    validator(value) {
      const rgbColorRegex = /rgba?\(\d{1,3}, \d{1,3}, \d{1,3}(?:, 0?.?\d{1,3})?\)/gm;
      const hexColorRegex = /#[a-fA-F0-8]{3}(?:[a-fA-F0-8]{3})?/gm;

      return ['info', 'alert', 'error'].includes(value) || rgbColorRegex.test(value) || hexColorRegex.test(value);
    },
  },
  closeBtnStyle: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'btn', 'text', 'button-outlined', 'btn-outlined', 'button-outline', 'btn-outline'].includes(value);
    },
  },
});

const isShowed = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
    if (!value) {
      emit('close');
    }
  },
});

const classes = computed(() => ({
  fixed: !props.absolute,
  absolute: props.absolute,
  'q-snkb': true,
  'q-animate-fadeIn': isShowed.value,
  [`q-snkb--${props.size}`]: true,
  [`q-snkb--pos-${props.position}`]: true,
}));

const bgColor = computed(() => {
  const rgbColorRegex = /rgba?\(\d{1,3}, \d{1,3}, \d{1,3}(?:, 0?.?\d{1,3})?\)/gm;
  const hexColorRegex = /#[a-fA-F0-8]{3}(?:[a-fA-F0-8]{3})?/gm;

  if (rgbColorRegex.test(props.color) || hexColorRegex.test(props.color)) {
    return props.color;
  }

  const colors = {
    info: '#FFB883',
    alert: '#db7d26',
    error: '#db2626',
  };

  return colors[props.color];
});

const styles = computed(() => {
  if (!bgColor.value) {
    return undefined;
  }

  return `background-color: ${bgColor.value}`;
});

const closeBtnVariant = computed(() => {
  const valuesDictionnary = {
    button: 'plain-rounded',
    btn: 'plain-rounded',
    text: 'link',
    'button-outlined': 'outline',
    'btn-outlined': 'outline',
    'button-outline': 'outline',
    'btn-outline': 'outline',
  };

  return valuesDictionnary[props.closeBtnStyle];
});
function close() {
  isShowed.value = !isShowed.value;
}
</script>

<style lang="scss" scoped>
.q-snkb {
  @apply z-50 flex flex-col md:flex-row px-4 py-3 mx-auto rounded shadow;

  /* SIZES */
  &--small {
    @apply w-3/12;
  }

  &--medium {
    @apply w-6/12;
  }

  &--large {
    @apply w-7/12;
  }

  /* POSITIONS */
  &--pos-top-left {
    @apply top-2 left-2;
  }

  &--pos-top {
    @apply top-2 left-1/2 -translate-x-1/2;
  }

  &--pos-top-right {
    @apply top-2 right-2;
  }

  &--pos-right {
    @apply right-2 top-1/2 -translate-y-1/2;
  }

  &--pos-bottom-right {
    @apply bottom-2 right-2;
  }

  &--pos-bottom {
    @apply left-1/2 -translate-x-1/2 bottom-2;
  }

  &--pos-bottom-left {
    @apply left-2 bottom-2;
  }

  &--pos-left {
    @apply left-2 top-1/2 -translate-y-1/2;
  }

  .content {
    @apply flex-grow;
  }

  .close-btn {
    @apply mx-auto mt-4 md:mt-0 md:mr-0 md:ml-2;
  }
}
</style>
