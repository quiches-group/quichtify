import '../../index.css';
import QFormatNumber from './QFormatNumber.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QFormatNumber',
  component: QFormatNumber,
  subcomponents: {},
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QFormatNumber },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div>
      <q-format-number :value="1456347349.435345" :max-fraction-digits="4" locale="fr-FR" />
      <q-format-number :value="2456347349.435345" :max-fraction-digits="2" />
      <q-format-number :value="3456347349.435345" :max-fraction-digits="7" />
      <q-format-number :value="4456347349.435345" />
    </div>
    `,
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
