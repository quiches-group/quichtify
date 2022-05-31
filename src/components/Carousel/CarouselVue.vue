<template>
  <vueper-slides fade :touchable="false">
    <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content" />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'CarouselVue',
  components: { VueperSlides, VueperSlide },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        id: 'slide-1',
        title: 'Slide <b class="carouselTitle">#1</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span class="carouselText">why not?</span>',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.le-dictionnaire.com%2Fpaysage-campagne.jpg&imgrefurl=https%3A%2F%2Fwww.le-dictionnaire.com%2Fdefinition%2Fpaysage&tbnid=dZUQqMZrvfEfpM&vet=12ahUKEwiNl9XFpYn4AhV1YvEDHWL1B1MQMygFegUIARDjAQ..i&docid=X4Jz74B70oN_lM&w=2229&h=1000&q=paysage&client=firefox-b-d&ved=2ahUKEwiNl9XFpYn4AhV1YvEDHWL1B1MQMygFegUIARDjAQ',
      },
      {
        id: 'slide-2',
        title: 'Slide <b class="carouselTitle">#2</b>',
        content: 'Ok bro ? <span class="carouselText">why not?</span>',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.le-dictionnaire.com%2Fpaysage-campagne.jpg&imgrefurl=https%3A%2F%2Fwww.le-dictionnaire.com%2Fdefinition%2Fpaysage&tbnid=dZUQqMZrvfEfpM&vet=12ahUKEwiNl9XFpYn4AhV1YvEDHWL1B1MQMygFegUIARDjAQ..i&docid=X4Jz74B70oN_lM&w=2229&h=1000&q=paysage&client=firefox-b-d&ved=2ahUKEwiNl9XFpYn4AhV1YvEDHWL1B1MQMygFegUIARDjAQ',
      },
    ],
  }),
};
</script>
