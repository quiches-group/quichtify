<template>
  <div class="h-32 w-32">
    <div v-if="isOpen" class="z-50 border px-4 py-3 rounded" :class="classes" :style="`background-color: ${color}`">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
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
      return ['bottom', 'bottom-left', 'bottom-right', 'top', 'top-left', 'top-right', 'left', 'right'].includes(value);
    },
  },
  color: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)',
  },
});

const classes = computed(() => {
  const styles = [];

  if (props.isOpen) {
    styles.push('q-animate-fadeIn');
  }
  // Size
  if (props.size === 'small') {
    styles.push('q-snkb--small');
  }

  if (props.size === 'medium') {
    styles.push('q-snkb--medium');
  }

  if (props.size === 'large') {
    styles.push('q-snkb--large');
  }
  // Position
  if (props.position === 'bottom') {
    styles.push('q-snkb--bottom')
  }

  if (props.position === 'bottom-left') {
    styles.push('q-snkb--bottom-left')
  }

  if (props.position === 'bottom-right') {
    styles.push('q-snkb--bottom-right')
  }

  if (props.position === 'top') {
    styles.push('q-snkb--top')
  }
  if (props.position === 'top-left') {
    styles.push('q-snkb--top-left')
  }
  if (props.position === 'top-right') {
    styles.push('q-snkb--top-right')
  }
  if (props.position === 'left') {
    styles.push('q-snkb--left')
  }
  if (props.position === 'right') {
    styles.push('q-snkb--right')
  }
  return styles;
})
</script>

<style scoped>

/* Size */
.q-snkb--small {
  @apply w-3/12
}

.q-snkb--medium {
  @apply w-6/12
}

.q-snkb--large {
  @apply w-9/12
}

/* Position */
.q-snkb--bottom {
  @apply absolute left-1/2 -translate-x-1/2 bottom-2
}

.q-snkb--bottom-left {
  @apply absolute left-2 bottom-2
}

.q-snkb--bottom-right {
  @apply absolute right-2 bottom-2
}

.q-snkb--top {
  @apply absolute left-1/2 -translate-x-1/2 top-2
}

.q-snkb--top-right {
  @apply absolute right-2 top-2
}

.q-snkb--top-left {
  @apply absolute left-2 top-2
}

.q-snkb--left {
  @apply absolute left-2 top-1/2 -translate-y-1/2
}

.q-snkb--right {
  @apply absolute right-2 top-1/2 -translate-y-1/2
}
</style>
