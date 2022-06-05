import '../../index.css';
import QCarousel from './QCarousel.vue';
import QCarouselItem from './QCarouselItem.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QCarousel',
  component: QCarousel,
  subcomponents: { QCarouselItem },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QCarousel, QCarouselItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <q-carousel>
      <q-carousel-item style="background-color: red">Tab 1</q-carousel-item>
      <q-carousel-item style="background-color: green">Tab 2</q-carousel-item>
      <q-carousel-item style="background-color: blue">Tab 3</q-carousel-item>
    </q-carousel>
    `,
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
