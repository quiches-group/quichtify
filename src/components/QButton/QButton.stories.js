import '../../index.css';
import QButton from './QButton.vue';
import QLoader from '../QLoader/QLoader.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Quichtify/QButton',
  component: QButton,
  subcomponents: { QButton, QLoader },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    defaultStyle: {
      control: {
        type: 'boolean',
      },
    },
    defaultPositionning: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['plain', 'plain-rounded', 'plain-rounded-full', 'link', 'link-underlined', 'outline'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'white'],
    },
    animation: {
      control: {
        type: 'select',
      },
      options: ['default', 'reduce', 'none'],
    },
    animateOnActive: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
  parameters: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QButton, QLoader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-button v-bind="args">Cick Me</q-button>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};

export const DefaultWithSomeStyleDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
DefaultWithSomeStyleDisabled.args = {
  defaultStyle: true,
  defaultPositionning: true,
};

export const SmallSized = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SmallSized.args = {
  size: 'small',
};

export const Plain = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Plain.args = {
  variant: 'plain',
};

export const PlainRounded = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
PlainRounded.args = {
  variant: 'plain-rounded',
};

export const Pils = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Pils.args = {
  variant: 'plain-rounded-full',
};

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Link.args = {
  variant: 'link',
};

export const LinkUnderlined = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
LinkUnderlined.args = {
  variant: 'link-underlined',
};

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Outline.args = {
  variant: 'outline',
};

export const PrimaryColor = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
PrimaryColor.args = {
  color: 'primary',
};

export const SecondaryColor = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SecondaryColor.args = {
  color: 'primary',
};

export const WhiteColor = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
WhiteColor.args = {
  color: 'white',
};

export const AnimationReduce = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
AnimationReduce.args = {
  animation: 'reduce',
};

export const AnimationNone = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
AnimationNone.args = {
  animation: 'none',
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Loading.args = {
  loading: true,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Disabled.args = {
  disabled: true,
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
