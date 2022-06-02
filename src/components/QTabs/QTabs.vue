<template>
  <div ref="root" class="q-tabs flex rounded-lg w-full p-1 space-x-1" :style="style">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

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

const style = reactive({
  color: props.textColor,
  backgroundColor: props.backgroundColor,
});

const resetTabs = () => {
  const children = Array.from(root.value.children);

  children.forEach((element) => {
    element.classList.remove('q-tab--active');
    element.style.removeProperty('background-color');
    element.style.removeProperty('color');
  });
};

const selectItem = (element) => {
  const tabIndex = element.attributes['data-tab-index'].value;

  resetTabs();
  element.classList.add('q-tab--active');
  element.style.setProperty('background-color', props.activeBackgroundColor);
  element.style.setProperty('color', props.activeTextColor);

  emit('selectIndex', tabIndex);
};

const selectItemFromIndex = (index) => {
  const children = Array.from(root.value.children);
  const item = children.find((el) => el.attributes['data-tab-index'].value === index);
  selectItem(item);
};

onMounted(() => {
  const children = Array.from(root.value.children);

  if (!props.selectedIndex) {
    selectItem(children[0]);
  } else {
    selectItemFromIndex(props.selectedIndex);
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
</script>
