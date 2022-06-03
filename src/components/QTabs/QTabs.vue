<template>
  <div ref="root" class="q-tabs flex rounded-lg w-full p-1 space-x-1" :style="style">
    <slot />
  </div>
</template>

<script setup>
import {
  ref, onMounted, computed, watch,
} from 'vue';

const emit = defineEmits(['selectIndex']);
const root = ref();

const props = defineProps({
  selectedIndex: {
    type: String,
    default: null,
  },
  backgroundColor: {
    type: String,
    default: null,
  },
  textColor: {
    type: String,
    default: '#000',
  },
  activeBackgroundColor: {
    type: String,
    default: '#40B883',
  },
  activeTextColor: {
    type: String,
    default: '#fff',
  },
});

const style = computed(() => ({
  color: props.textColor,
  backgroundColor: props.backgroundColor,
}));

const resetTabs = () => {
  const children = Array.from(root.value.children);

  children.forEach((element) => {
    element.classList.remove('q-tab--active');
    element.style.removeProperty('background-color');
    element.style.removeProperty('color');
  });
};

const selectItem = (element) => {
  const index = element.attributes['data-tab-index'].value;

  emit('selectIndex', index);
};

const setTabsClasses = (index) => {
  const children = Array.from(root.value.children);
  const item = children.find((el) => el.attributes['data-tab-index'].value === index);

  resetTabs();

  item.classList.add('q-tab--active');
  item.style.setProperty('background-color', props.activeBackgroundColor);
  item.style.setProperty('color', props.activeTextColor);
};

onMounted(() => {
  const children = Array.from(root.value.children);

  if (!props.selectedIndex) {
    selectItem(children[0]);
  } else {
    setTabsClasses(props.selectedIndex);
  }

  children.forEach((item, index) => {
    if (!item.attributes['data-tab-index']) {
      item.setAttribute('data-tab-index', index);
    }

    item.addEventListener('click', () => {
      selectItem(item);
    });
  });
});

watch(() => props.selectedIndex, (newIndex) => {
  setTabsClasses(newIndex);
});
</script>
