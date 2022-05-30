<template>
  <div class="container">
    <div class="interior">
      <a class="btn" href="#open-modal">Modal ! :)</a>
    </div>
  </div>
  <div id="open-modal" class="modal-window">
    <div>
      <a href="#" title="Close" class="modal-close">Close</a>
      <h1>{{ title }}</h1>
      <div> {{first_text }}</div>
      <br>
      <div><small>Check out 👇</small></div>
      <a :href="button_link" target="_blank">{{name_link}}</a>
    </div>
  </div>
</template>

<script>
import './Modal.scss';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Enter your title modal here.',
    },
    first_text: {
      type: String,
      default: 'Write your text under the title here',
    },
    button_link: {
      type: String,
      default: 'https://www.linkedin.com/in/antoine-mousset-55312417a/',
    },
    name_link: {
      type: String,
      default: 'Click her !',
    },
  },
  data() {},
};
</script>

<style scoped>

</style>
