<template>
  <div class="flex flex-col items-center mt-20">
    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <p class="mb-2 text-center">Default</p>
      <q-button @click="addEvent">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <p class="mb-2 text-center">Without default style and default positionning</p>
      <q-button @click="addEvent" :defaultStyle="false" :defaultPositionning="false">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Sizes
        <pre><code>small</code> | <code>medium (default)</code> | <code>large</code></pre>
      </h2>
      <q-button @click="addEvent" size="small">Click Me</q-button>
      <q-button @click="addEvent" size="medium">Click Me</q-button>
      <q-button @click="addEvent" size="large">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Variants
        <pre><code>plain</code> | <code>plain-rounded (default)</code> | <code>plain-rounded-full</code> | <code>link</code> | <code>link-underlined</code> | <code>outline</code></pre>
      </h2>
      <q-button @click="addEvent" variant="plain">Click Me</q-button>
      <q-button @click="addEvent" variant="plain-rounded">Click Me</q-button>
      <q-button @click="addEvent" variant="plain-rounded-full">Click Me</q-button>
      <q-button @click="addEvent" variant="link">Click Me</q-button>
      <q-button @click="addEvent" variant="link-underlined">Click Me</q-button>
      <q-button @click="addEvent" variant="outline">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Colors
        <pre><code>primary (default)</code> | <code>secondary</code> | <code>white</code></pre>
      </h2>
      <q-button @click="addEvent" color="primary">Click Me</q-button>
      <q-button @click="addEvent" color="secondary">Click Me</q-button>
      <q-button @click="addEvent" color="white">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Animation presets
        <pre><code>default (default)</code> | <code>reduce</code> | <code>none</code></pre>
      </h2>

      <div class="grid grid-cols-3 gap-2">
        <code>default</code>
        <code>reduce</code>
        <code>none</code>
        <q-button @click="addEvent" variant="plain-rounded">Click Me</q-button>
        <q-button @click="addEvent" variant="plain-rounded" animation="reduce">Click Me</q-button>
        <q-button @click="addEvent" variant="plain-rounded" animation="none">Click Me</q-button>
        <q-button @click="addEvent" variant="plain-rounded-full">Click Me</q-button>
        <q-button @click="addEvent" variant="plain-rounded-full" animation="reduce">Click Me</q-button>
        <q-button @click="addEvent" variant="plain-rounded-full" animation="none">Click Me</q-button>
        <q-button @click="addEvent" variant="link">Click Me</q-button>
        <q-button @click="addEvent" variant="link" animation="reduce">Click Me</q-button>
        <q-button @click="addEvent" variant="link" animation="none">Click Me</q-button>
        <q-button @click="addEvent" variant="link-underlined">Click Me</q-button>
        <q-button @click="addEvent" variant="link-underlined" animation="reduce">Click Me</q-button>
        <q-button @click="addEvent" variant="link-underlined" animation="none">Click Me</q-button>
        <q-button @click="addEvent" variant="outline">Click Me</q-button>
        <q-button @click="addEvent" variant="outline" animation="reduce">Click Me</q-button>
        <q-button @click="addEvent" variant="outline" animation="none">Click Me</q-button>
      </div>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Keep hover & focus animations if has an "active" class
        <pre><code>false (default)</code> | <code>true</code></pre>
      </h2>
      <q-button @click="addEvent" class="js-active">Click Me</q-button>
      <q-button @click="addEvent" :animateOnActive="true" class="js-active">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Loading
        <pre><code>false (default)</code> | <code>true</code></pre>
      </h2>

      <div class="grid grid-cols-4 gap-2">
        <code>plain</code>
        <code>link</code>
        <code>link-underlined</code>
        <code>outline</code>

        <q-button @click="addEvent" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" :loading="true">Click Me</q-button>

        <q-button @click="addEvent" :loading="true" color="secondary">Click Me</q-button>
        <q-button @click="addEvent" variant="link" color="secondary" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" variant="link-underlined" color="secondary" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" variant="outline" color="secondary" :loading="true">Click Me</q-button>

        <q-button @click="addEvent" :loading="true" color="white">Click Me</q-button>
        <q-button @click="addEvent" variant="link" color="white" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" variant="link-underlined" color="white" :loading="true">Click Me</q-button>
        <q-button @click="addEvent" variant="outline" color="white" :loading="true">Click Me</q-button>
      </div>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Disabled
        <pre><code>false (default)</code> | <code>true</code></pre>
      </h2>
      <q-button @click="addEvent">Click Me</q-button>
      <q-button @click="addEvent" :animateOnActive="true" class="js-active">Click Me</q-button>
    </div>

    <hr />
    <pre class="flex flex-col p-5 mt-10 bg-black rounded-lg">
      <p class="mb-4 text-white">Logs:</p>
      <code v-for="i in state.events" :key="i" class="block text-white">New click event</code>
    </pre>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  events: 0,
});

function addEvent() {
  console.log('NEW');
  state.events += 1;
}
</script>
