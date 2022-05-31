<template>
  <CarouselVue :slides="slides"/>
</template>

<script>
import CarouselVue from './CarouselVue.vue';
import './Carousel.scss';

export default {
  data() {
    return {
      slides: [
        {
          id: 'slide-1',
          title: '<p class="carouselTitle"> Slide <strong>1</strong></p>',
          content: '<span class="carouselText">Première slide !</span>',
          backgroundColor: '#ff5252',
        },
        {
          id: 'slide-2',
          title: '<p class="carouselTitle"> Slide <strong>2</strong></p>',
          content: '<span class="carouselText">Deuxième slide !</span>',
          backgroundColor: '#42b983',
        },
        {
          id: 'slide-3',
          title: '<p class="carouselTitle"> Slide <strong>3</strong></p>',
          content: '<span class="carouselText">Dernière slide !</span>',
          backgroundColor: '#9197dd',
        },
      ],
    };
  },
  name: 'ExampleVue',
  components: { CarouselVue },
  methods: {},
};
</script>
