import '../../index.css';
import QSeparator from './QSeparator.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'quichtify/QSeparator',
  component: QSeparator,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QSeparator },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div style="display: flex; align-items: center; justify-content: center; width: 360px; height: 360px"><q-separator v-bind="args" /></div>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  color: '#000000',
};

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Horizontal.args = {
  color: '#000000',
  vertical: false,
};

export const Vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Vertical.args = {
  color: '#000000',
  vertical: true,
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
