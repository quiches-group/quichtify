<template>
  <div>Hello!</div>
  <CarouselVue>
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </CarouselVue>
</template>

<script>
import CarouselVue from './Carousel.vue';

export default {
  data() {
    return {};
  },
  name: 'ExampleVue',
  components: { CarouselVue },
  methods: {},
};
</script>
