import '../../index.css';
import QTabs from './QTabs.vue';
import QTab from './QTab.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'quichtify/QTabs',
  component: QTabs,
  subcomponent: { QTab },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    selectedIndex: {
      control: {
        type: 'select',
        options: ['tab1', 'tab2', 'tab3'],
      },
    },
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    activeBackgroundColor: {
      control: 'color',
    },
    activeTextColor: {
      control: 'color',
    },
    default: {
      control: 'none',
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QTabs, QTab },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <p style="max-width: 500px; color: orangered; margin-bottom: 15px; text-align: center">This component need function to handle event on click. It does not work for now. Please use <code>selectedIndex</code> select in control to change active tab.</p>
    <q-tabs v-bind="args">
      <q-tab tab-index="tab1">Tab 1</q-tab>
      <q-tab tab-index="tab2">Tab 2</q-tab>
      <q-tab tab-index="tab3">Tab 3</q-tab>
    </q-tabs>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  selectedIndex: 'tab1',
};
