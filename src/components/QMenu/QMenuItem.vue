<template>
  <li class="q-menu-item block px-2 py-1 cursor-pointer " :data-tab-index="itemIndex" >
    <slot/>
  </li>
</template>

<script setup>
defineProps({
  itemIndex: {
    type: String,
    default: null,
  },
});
</script>
