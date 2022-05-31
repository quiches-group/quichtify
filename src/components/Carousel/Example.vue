<template>
  <CarouselVue :slides="slides"/>
</template>

<script>
import CarouselVue from './CarouselVue.vue';

export default {
  data() {
    return {
      slides: [
        {
          id: 'slide-1',
          title: 'Slide <b class="carouselTitle">#1</b>',
          content: 'Slide title can be HTML.<br>And so does the slide content, <span class="carouselText">why not?</span>',
          backgroundColor: '#ff5252',
        },
        {
          id: 'slide-2',
          title: 'Slide <b class="carouselTitle">#2</b>',
          content: 'Ok bro ? <span class="carouselText">why not?</span>',
          backgroundColor: '#42b983',
        },
      ],
    };
  },
  name: 'ExampleVue',
  components: { CarouselVue },
  methods: {},
};
</script>
