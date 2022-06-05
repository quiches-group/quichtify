import '../../index.css';
import QRow from './QRow.vue';
import QCol from './QCol.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QRow',
  component: QRow,
  subcomponents: { QCol },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'baseline', 'stretch'],
      },
    },
    justify: {
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
      },
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QRow, QCol },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <q-row justify="start">
      <q-col class="bg-red-600" :cols="args.elementOne.cols" :sm="args.elementOne.sm" :md="args.elementOne.md" :lg="args.elementOne.lg" :xl="args.elementOne.xl">element one</q-col>
      <q-col class="bg-red-600" :cols="args.elementTwo.cols" :sm="args.elementTwo.sm" :md="args.elementTwo.md" :lg="args.elementTwo.lg" :xl="args.elementTwo.xl">element two</q-col>
      <q-col class="bg-red-600" :cols="args.elementThree.cols" :sm="args.elementThree.sm" :md="args.elementThree.md" :lg="args.elementThree.lg" :xl="args.elementThree.xl">element three</q-col>
      <q-col class="bg-blue-600" :cols="args.elementFour.cols" :sm="args.elementFour.sm" :md="args.elementFour.md" :lg="args.elementFour.lg" :xl="args.elementFour.xl">element four</q-col>
      <q-col class="bg-blue-600" :cols="args.elementFive.cols" :sm="args.elementFive.sm" :md="args.elementFive.md" :lg="args.elementFive.lg" :xl="args.elementFive.xl">element five</q-col>
      <q-col class="bg-blue-600" :cols="args.elementSix.cols" :sm="args.elementSix.sm" :md="args.elementSix.md" :lg="args.elementSix.lg" :xl="args.elementSix.xl">element six</q-col>
      <q-col class="bg-green-600" :cols="args.elementSeven.cols" :sm="args.elementSeven.sm" :md="args.elementSeven.md" :lg="args.elementSeven.lg" :xl="args.elementSeven.xl">element seven</q-col>
      <q-col class="bg-green-600" :cols="args.elementEight.cols" :sm="args.elementEight.sm" :md="args.elementEight.md" :lg="args.elementEight.lg" :xl="args.elementEight.xl">element eight</q-col>
      <q-col class="bg-green-600" :cols="args.elementNine.cols" :sm="args.elementNine.sm" :md="args.elementNine.md" :lg="args.elementNine.lg" :xl="args.elementNine.xl">element nine</q-col>
      <q-col class="bg-red-600" :cols="args.elementTen.cols" :sm="args.elementTen.sm" :md="args.elementTen.md" :lg="args.elementTen.lg" :xl="args.elementTen.xl">element ten</q-col>
    </q-row>
    `,
});

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Example.args = {
  elementOne: {
    cols: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  elementTwo: {
    cols: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  elementThree: {
    cols: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  elementFour: {
    cols: 6,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 4,
  },
  elementFive: {
    cols: 6,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 4,
  },
  elementSix: {
    cols: 6,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 4,
  },
  elementSeven: {
    cols: 4,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  elementEight: {
    cols: 4,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  elementNine: {
    cols: 4,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  elementTen: {
    cols: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
