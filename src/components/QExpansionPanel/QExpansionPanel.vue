<template>
    <div class="rounded-lg q-panel border bg-white border-gray-200 shadow-lg shadow-black-500/50"  :class="{ 'mb-2': state.panelIsOpen }" :data-panel-index="panelIndex" >
      <h2 class="accordion-header mb-0">
        <button
            class="
                  relative
                  flex
                  items-center
                  w-full
                  py-4
                  px-5
                  text-base text-gray-800 text-left
                  border-0
                  rounded-2xl
                " type="button"
            @click="togglePanel">
          <slot name="header"/>
          <span id="dropdown-chevron" class="ml-auto self-center transition-transform ease-in-out duration-250" :class="{ 'rotate-180': state.panelIsOpen }" />
        </button>
      </h2>
      <transition>
      <div
        v-if="state.panelIsOpen">

        <div class="accordion-body py-4 px-5 transition-transform">
          <slot name="content"/>
        </div>

      </div>
      </transition>
    </div>


</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  panelIsOpen: null,
});

const togglePanel = (newValue) => {
  state.panelIsOpen = !state.panelIsOpen
  console.log(newValue)
};

defineProps({
  panelIndex: {
    type: String,
    default: null,
  }
});
</script>

<style scoped>
#dropdown-chevron {
  position: relative;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#dropdown-chevron:after {
  content: '';
  display: block;
  width: 2px;
  height: 8px;
  border-radius: 3px;
  background-color: rgb(55, 65, 81);
  transform-origin: 50% 100%;
  transform: translateX(-1px) rotate(-45deg);
}

#dropdown-chevron:before {
  content: '';
  display: block;
  width: 2px;
  height: 8px;
  border-radius: 3px;
  background-color: rgb(55, 65, 81);
  transform-origin: 50% 100%;
  transform: rotate(45deg);
}
</style>
