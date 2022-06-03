<template>
  <ul ref="root" class="q-menu flex flex-col md:flex-row" :style="style">
    <slot/>
  </ul>
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

const resetItems = () => {
  const children = Array.from(root.value.children);

  children.forEach((element) => {
    element.classList.remove('q-menu-item--active');
    element.style.removeProperty('background-color');
    element.style.removeProperty('color');
  });
};

const selectItem = (element) => {
  const index = element.attributes['data-item-index'].value;
  emit('selectIndex', index);
};

const setItemsClasses = (index) => {
  const children = Array.from(root.value.children);
  const item = children.find((el) => el.attributes['data-item-index'].value === index);

  resetItems();

  item.classList.add('q-menu-item--active');
  item.style.setProperty('background-color', props.activeBackgroundColor);
  item.style.setProperty('color', props.activeTextColor);
};

onMounted(() => {
  const children = Array.from(root.value.children);

  if (!props.selectedIndex) {
    selectItem(children[0]);
  } else {
    setItemsClasses(props.selectedIndex);
  }

  children.forEach((item, index) => {
    if (!item.attributes['data-item-index']) {
      item.setAttribute('data-item-index', index);
    }
    item.addEventListener('click', () => {
      selectItem(item);
    });
  });
});

watch(() => props.selectedIndex, (newIndex) => {
  setItemsClasses(newIndex);
});
</script>
