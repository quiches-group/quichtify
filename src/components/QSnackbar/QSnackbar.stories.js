import '../../index.css';
import QSnackbar from './QSnackbar.vue';
import QButton from '../QButton/QButton.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QSnackbar',
  component: QSnackbar,
  subcomponents: { QButton },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    modelValue: {
      control: {
        type: 'boolean',
        description: 'Show/hide snackbar',
        defaultValue: false,
      },
    },
    dissmissable: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    absolute: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    position: {
      control: {
        type: 'select',
      },
      options: ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'],
      defaultValue: 'bottom',
    },
    color: {
      control: {
        type: 'text',
      },
      description: "Choose between built-in colors : ['info', 'alert', 'error'] or give hex/rgb(a) one",
      defaultValue: 'info',
    },
    closeBtnStyle: {
      control: {
        type: 'select',
      },
      options: ['button', 'btn', 'text', 'button-outlined', 'btn-outlined', 'button-outline', 'btn-outline'],
      defaultValue: 'button',
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QSnackbar, QButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<q-snackbar v-bind="args">Beautifull snackbar ✨</q-snackbar>`,
});

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Info.args = {
  position: 'top',
  color: 'info',
  dissmissable: true,
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Error.args = {
  color: 'red',
  dissmissable: false,
};

export const CustomBtn = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QSnackbar, QButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <q-snackbar v-bind="args">
      <span style="color: white">Beautifull snackbar ✨</span>
      <template #close-btn>
        <span @click="state.showCustomSnkb = false" style="color: white">Custom Close Btn ✨</span>
      </template>
    </q-snackbar>
  `,
});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
CustomBtn.args = {
  color: '#000',
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
