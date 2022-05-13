<template>
  <div>
    <q-format-number :value="1456347349.435345" :max-fraction-digits="4" locale="fr-FR" />
    <q-format-number :value="2456347349.435345" :max-fraction-digits="2" />
    <q-format-number :value="3456347349.435345" :max-fraction-digits="7" />
    <q-format-number :value="4456347349.435345" />
  </div>
</template>

<script>
import QFormatNumber from '@/components/FormatNumber/FormatNumber.vue';

export default {
  name: 'QFormatNumberExample',
  components: { QFormatNumber },
};
</script>
