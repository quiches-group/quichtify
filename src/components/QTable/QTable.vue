<template>
  <table>
    <tr v-if="headers">
      <th
          v-for="header in headers"
          :key="header.value"
          :class="`text-${header.align}`">
        {{ header.text }}
      </th>
    </tr>
    <tr v-for="(item, itemKey) in items" :key="itemKey">
      <td v-for="header in headers" :key="header.value" :class="`text-${header.align}`">
        {{ item[header.value] }}
      </td>
    </tr>
  </table>
</template>

<script setup>
defineProps({
  headers: {
    type: Object,
    default: null,
  },
  items: {
    type: String,
    default: null,
    required: true,
  },
});
</script>
