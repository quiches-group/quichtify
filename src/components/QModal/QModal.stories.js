import '../../index.css';
import QModal from './QModal.vue';
import QModalContent from './QModalContent.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'quichtify/QModal',
  component: QModal,
  subcomponent: { QModalContent },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QModal, QModalContent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div>
      <q-modal v-bind="args" button-text="I accept" modal-title="Test modal" background-color="white" @modal-state-change="buttonAction">
        <q-modal-content>
          <p>This is my modal, do you accept it ?</p>
          <p>Toggle <code>showModal</code> in controls to close modal</p>
        </q-modal-content>
      </q-modal>
      <p>Toggle <code>showModal</code> in controls to display modal</p>
    </div>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  isOpen: false,
};
