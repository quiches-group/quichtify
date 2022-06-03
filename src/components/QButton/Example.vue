<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col items-center mt-20">
    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <p class="mb-2 text-center">Default</p>
      <q-button @click="addEvent">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <p class="mb-2 text-center">Without default style and default positionning</p>
      <q-button :default-style="false" :default-positionning="false" @click="addEvent">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Sizes
        <pre><code>small</code> | <code>medium (default)</code> | <code>large</code></pre>
      </h2>
      <q-button size="small" @click="addEvent">Click Me</q-button>
      <q-button size="medium" @click="addEvent">Click Me</q-button>
      <q-button size="large" @click="addEvent">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Variants
        <pre><code>plain</code> | <code>plain-rounded (default)</code> | <code>plain-rounded-full</code> | <code>link</code> | <code>link-underlined</code> | <code>outline</code></pre>
      </h2>
      <q-button variant="plain" @click="addEvent">Click Me</q-button>
      <q-button variant="plain-rounded" @click="addEvent">Click Me</q-button>
      <q-button variant="plain-rounded-full" @click="addEvent">Click Me</q-button>
      <q-button variant="link" @click="addEvent">Click Me</q-button>
      <q-button variant="link-underlined" @click="addEvent">Click Me</q-button>
      <q-button variant="outline" @click="addEvent">Click Me</q-button>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Colors
        <pre><code>primary (default)</code> | <code>secondary</code> | <code>white</code></pre>
      </h2>
      <q-button color="primary" @click="addEvent">Click Me</q-button>
      <q-button color="secondary" @click="addEvent">Click Me</q-button>
      <q-button color="white" @click="addEvent">Click Me</q-button>
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
        <q-button variant="plain-rounded" @click="addEvent">Click Me</q-button>
        <q-button variant="plain-rounded" animation="reduce" @click="addEvent">Click Me</q-button>
        <q-button variant="plain-rounded" animation="none" @click="addEvent">Click Me</q-button>
        <q-button variant="plain-rounded-full" @click="addEvent">Click Me</q-button>
        <q-button variant="plain-rounded-full" animation="reduce" @click="addEvent">Click Me</q-button>
        <q-button variant="plain-rounded-full" animation="none" @click="addEvent">Click Me</q-button>
        <q-button variant="link" @click="addEvent">Click Me</q-button>
        <q-button variant="link" animation="reduce" @click="addEvent">Click Me</q-button>
        <q-button variant="link" animation="none" @click="addEvent">Click Me</q-button>
        <q-button variant="link-underlined" @click="addEvent">Click Me</q-button>
        <q-button variant="link-underlined" animation="reduce" @click="addEvent">Click Me</q-button>
        <q-button variant="link-underlined" animation="none" @click="addEvent">Click Me</q-button>
        <q-button variant="outline" @click="addEvent">Click Me</q-button>
        <q-button variant="outline" animation="reduce" @click="addEvent">Click Me</q-button>
        <q-button variant="outline" animation="none" @click="addEvent">Click Me</q-button>
      </div>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Keep hover & focus animations if has an "active" class
        <pre><code>false (default)</code> | <code>true</code></pre>
      </h2>
      <q-button class="js-active" @click="addEvent">Click Me</q-button>
      <q-button :animate-on-active="true" class="js-active" @click="addEvent">Click Me</q-button>
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

        <q-button :loading="true" @click="addEvent">Click Me</q-button>
        <q-button :loading="true" @click="addEvent">Click Me</q-button>
        <q-button :loading="true" @click="addEvent">Click Me</q-button>
        <q-button :loading="true" @click="addEvent">Click Me</q-button>

        <q-button :loading="true" color="secondary" @click="addEvent">Click Me</q-button>
        <q-button variant="link" color="secondary" :loading="true" @click="addEvent">Click Me</q-button>
        <q-button variant="link-underlined" color="secondary" :loading="true" @click="addEvent">Click Me</q-button>
        <q-button variant="outline" color="secondary" :loading="true" @click="addEvent">Click Me</q-button>

        <q-button :loading="true" color="white" @click="addEvent">Click Me</q-button>
        <q-button variant="link" color="white" :loading="true" @click="addEvent">Click Me</q-button>
        <q-button variant="link-underlined" color="white" :loading="true" @click="addEvent">Click Me</q-button>
        <q-button variant="outline" color="white" :loading="true" @click="addEvent">Click Me</q-button>
      </div>
    </div>

    <div class="flex flex-col gap-y-5 items-center p-4 mt-5 rounded-lg border border-gray-300">
      <h2 class="mb-2 text-center">
        Disabled
        <pre><code>false (default)</code> | <code>true</code></pre>
      </h2>
      <q-button @click="addEvent">Click Me</q-button>
      <q-button :animate-on-active="true" class="js-active" @click="addEvent">Click Me</q-button>
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
  state.events += 1;
}
</script>
