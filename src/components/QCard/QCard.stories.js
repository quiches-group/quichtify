import '../../index.css';
import QCard from './QCard.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QCard',
  component: QCard,
  subcomponents: { QCard },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <q-card>
        <img src="https://cryptoast.fr/wp-content/uploads/2021/01/analyse-elrond-egld.jpg" alt="banner">

        <q-card-content>
          <q-card-title>Je suis le titre</q-card-title>
          <h2>Je suis le sous titre</h2>
          <p>Je suis la description</p>

          <button>Click me</button>
        </q-card-content>
      </q-card>
    `,
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
