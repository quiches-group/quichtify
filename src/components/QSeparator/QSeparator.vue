<template>
  <hr v-if="!vertical" :class="separatorClasses" :style="separatorStyles" />
  <span v-else :class="separatorClasses" :style="separatorStyles" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '#000000',
  },
  size: {
    type: String,
    default: '1px',
  },
});

const separatorClasses = computed(() => (props.vertical ? 'h-full' : 'w-full'));
const separatorStyles = computed(() => {
  const styles = [];

  styles.push(`background-color: ${props.color}`);

  if (props.vertical) {
    styles.push(`width: ${props.size}`);
  } else {
    styles.push(`height: ${props.size}`);
  }

  return styles;
});
</script>
