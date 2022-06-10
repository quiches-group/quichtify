import '../../index.css';
import QExpansionPanel from './QExpansionPanel.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QExpansionPanel',
  component: QExpansionPanel,
  subcomponents: {},
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    header: {
      control: 'text',
      defaultValue: "This is the header of your panel",
    },
    content: {
      control: 'text',
      defaultValue: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        euismod nulla vitae odio pharetra maximus. In hac habitasse platea
        dictumst. Sed maximus dolor eget massa fringilla congue. In tellus
        ligula, pharetra in faucibus eu, hendrerit et elit. Vestibulum pellentesque,
        dolor sed gravida porttitor, diam turpis gravida odio, dapibus dictum magna
        turpis sodales augue. Sed in dapibus lorem. Duis sed elit tincidunt, ultrices
        enim vel, vehicula ex.
      `,

    },
    accentColor: {
      control: 'color',
    },
    disabled: {
      control: 'boolean'
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QExpansionPanel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <q-expansion-panel v-bind="args">
      <template #header>
        <h3 class="mr-20">{{ args.header }}</h3>
      </template>
      <template #content>
        <div class="w-80">{{ args.content }}</div>
      </template>
    </q-expansion-panel>
    `,
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {
  options: ['😀😎🙁🤯', '😀😡🥶🫡', '😀😶🫥🫣', '😀🥹😻', 'Ceci est un test !'],
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
