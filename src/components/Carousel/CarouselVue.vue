<template>
  <VueperSlides fade :touchable="false">
    <VueperSlide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :style="'background-color: ' + slide.backgroundColor"/>
    <template #loader>
      <i class="icon icon-loader spinning"></i>
      <span>Loading...</span>
    </template>
  </VueperSlides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'CarouselVue',
  components: { VueperSlides, VueperSlide },
  props: {
    slides: {
      type: Array,
    },
  },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
  }),
};
</script>
