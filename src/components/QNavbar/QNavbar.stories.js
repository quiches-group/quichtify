import '../../index.css';
import QNavbar from './QNavbar.vue';
import QNavbarContent from './QNavbarContent.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'quichtify/QNavbar',
  component: QNavbar,
  subcomponent: { QNavbarContent },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QNavbar, QNavbarContent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <p style="max-width: 360px">Manual set this story to mobile size and toggle <code>navbarIsOpen</code> in controls.</p>
    <q-navbar v-bind="args">
      <q-navbar-content class="bg-red-500">
        <ul>
          <li>Items 1</li>
          <li>Items 2</li>
          <li>Items 3</li>
          <li>Items 4</li>
        </ul>
      </q-navbar-content>
    </q-navbar>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  isOpen: false,
};
