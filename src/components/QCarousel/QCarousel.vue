<template>
  <div class="q-carousel" @keydown="keyPress">
    <div class="w-60 h-60 bg-black text-white overflow-hidden">
      <button class="button w-auto text-xs font-bold bg-black justify-center border-none pt-2 pb-2 text-white rounded mt-10 mb-5 mr-5 inset-y-0 left-0 w-16 h-10" @click="selectItemFromIndex(state.selectedIndex - 1)">Left</button>
      <button class="button w-auto text-xs font-bold bg-black justify-center border-none pt-2 pb-2 text-white rounded mt-10 mb-5 inset-y-0 right-0 w-16 h-10" @click="selectItemFromIndex(state.selectedIndex + 1)">Right</button>
      <div ref="root" class="flex w-60 h-60 bg-black text-white overflow-hidden relative justify-center">
      <slot/>
    </div>
   </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const root = ref();
const state = reactive({
  selectedIndex: 0,
});

const setItemsClasses = () => {
  const children = Array.from(root.value.children);

  children.forEach((el) => {
    el.classList.remove('q-carousel-item--left');
    el.classList.remove('q-carousel-item--right');
    el.classList.remove('q-carousel-item--active');

    const index = Number(el.attributes['data-carousel-index'].value);

    if (index === state.selectedIndex) {
      el.classList.add('q-carousel-item--active');
    } else if (index > state.selectedIndex) {
      el.classList.add('q-carousel-item--right');
    } else if (index < state.selectedIndex) {
      el.classList.add('q-carousel-item--left');
    }
  });
};

const selectItemFromIndex = (index) => {
  const children = Array.from(root.value.children);
  let itemIndex = index;

  if (itemIndex < 0) {
    itemIndex = children.length - 1;
  } else if (itemIndex > children.length - 1) {
    itemIndex = 0;
  }

  state.selectedIndex = Number(itemIndex);
  setItemsClasses();
};

const keyPress = (e) => {
  if (e.key === 'ArrowLeft') {
    selectItemFromIndex(state.selectedIndex - 1);
  } else if (e.key === 'ArrowRight') {
    selectItemFromIndex(state.selectedIndex + 1);
  }
};

onMounted(() => {
  const children = Array.from(root.value.children);

  children.forEach((item, index) => {
    item.setAttribute('data-carousel-index', index);
  });

  setItemsClasses();
});

</script>

<style>

.q-carousel-item--active,
.q-carousel-item--left,
.q-carousel-item--right {
  position: absolute;
  top: 0;
  bottom: 0;
}

.q-carousel-item--active {
  left: 0;
}

.q-carousel-item--right {
  left: 100%;
}

.q-carousel-item--left {
  left: -100%;
}
</style>
