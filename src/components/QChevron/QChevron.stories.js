import '../../index.css';
import QChevron from './QChevron.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QChevron',
  component: QChevron,
  subcomponents: {},
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    accentColor: {
      control: 'color',
    },
    state: {
      control: 'boolean',
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QChevron },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<q-chevron v-bind="args"/>`,
});

export const Example = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
