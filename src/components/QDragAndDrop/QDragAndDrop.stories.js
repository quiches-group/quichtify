import '../../index.css';
import QDragAndDrop from './QDragAndDrop.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QDragAndDrop',
  component: QDragAndDrop,
  subcomponents: {},
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
  components: { QDragAndDrop },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-drag-and-drop v-bind="args" :columns-of-items="args.columnOfItems" />',
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {
  columnOfItems: [
    {
      id: 1,
      title: 'TODO',
      items: [
        { id: 1, title: 'Titre 1' },
        { id: 2, title: 'Titre 2' },
      ],
    },
    { id: 2, title: 'IN PROGRESS', items: [{ id: 3, title: 'Titre 3' }] },
    { id: 3, title: 'DONE', items: [{ id: 4, title: 'Titre 4' }] },
  ],
  color: '#fff',
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
