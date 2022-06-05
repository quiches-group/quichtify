import '../../index.css';
import QMenu from './QMenu.vue';
import QMenuItem from './QMenuItem.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'quichtify/QMenu',
  component: QMenu,
  subcomponent: { QMenuItem },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    selectedIndex: {
      control: 'select',
      options: ['tab1', 'tab2', 'tab3', 'tab4'],
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
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QMenu, QMenuItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <p style="max-width: 500px; color: orangered; margin-bottom: 15px; text-align: center">This component need function to handle event on click. It does not work for now. Please use <code>selectedIndex</code> select in control to change active tab.</p>
    <q-menu v-bind="args">
      <q-menu-item item-index="tab1">Swap</q-menu-item>
      <q-menu-item item-index="tab2">Stacking</q-menu-item>
      <q-menu-item item-index="tab3">Farm</q-menu-item>
      <q-menu-item item-index="tab4">Wallet</q-menu-item>
    </q-menu>
    `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  selectedIndex: 'tab1',
};
