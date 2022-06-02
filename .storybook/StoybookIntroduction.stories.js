import StoybookIntroduction from './StoybookIntroduction.vue';

export default {
  title: 'Stoybook Introduction',
  component: StoybookIntroduction,
};

const Template = (args) => ({
  components: { StoybookIntroduction },
  template: '<StoybookIntroduction />',
});

export const StoybookIntroductionPage = Template.bind({});
