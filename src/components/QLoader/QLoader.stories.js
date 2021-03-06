import '../../index.css';
import QLoader from './QLoader.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'quichtify/QLoader',
  component: QLoader,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
    },
    accentColor: {
      control: {
        type: 'color',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QLoader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-loader v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  bgColor: 'rgb(245, 245, 244)',
  accentColor: 'rgb(56, 189, 248)',
  size: 50,
};
