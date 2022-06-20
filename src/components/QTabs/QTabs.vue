<template>
  <div ref="root" class="flex p-1 space-x-1 w-full rounded-lg q-tabs" :style="style">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';

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
  disabled: {
    type: Boolean,
    default: false,
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
  if (props.disabled) {
    return;
  }
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

  children.forEach((item, index) => {
    if (!item.attributes['data-tab-index']) {
      item.setAttribute('data-tab-index', index);
    }

    item.addEventListener('click', () => {
      selectItem(item);
    });
  });

  if (!props.selectedIndex) {
    selectItem(children[0]);
  } else {
    setTabsClasses(props.selectedIndex);
  }
});

watch(
  () => props.selectedIndex,
  (newIndex) => {
    setTabsClasses(newIndex);
  },
);

watch(
  () => props.disabled,
  () => {
    const children = Array.from(root.value.children);

    children.forEach((item) => {
      if (!props.disabled) {
        item.removeAttribute('disabled');
        return;
      }

      item.setAttribute('disabled');
    });
  },
);
</script>
