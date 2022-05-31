import '../../index.css';
import QHelloWorld from './QHelloWorld.vue';

// TODO: 6 - Update import to your corresponding component

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  // TODO: 7 - Update title and component to match your component name (keep 'Quichify/')
  title: 'Quichify/QHelloWorld',
  component: QHelloWorld,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // TODO: 8 - Update components property and template as you use on regular Vue createApp function
  // Components used in your story `template` are defined in the `components` object
  components: { QHelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-hello-world v-bind="args" />',
});

export const ExampleOne = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
ExampleOne.args = {
  // TODO: 9 - Setup all your props
  msg: 'Hello World !',
};

// TODO: 10 - Create any version as necessary to show
export const ExampleTwo = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
ExampleTwo.args = {
  msg: '👋',
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
