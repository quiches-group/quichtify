<template>
  <div>
    <q-navbar :is-open="state.navbarIsOpen" @is-open="changeNavbarState">
      <div class="site-logo">
        <a href="acceuil.html">Acceuil</a>
        <img class="logo" src="images/Logo_Laroche.svg" alt="" />
      </div>

      <ul>
        <li>
          <a href="proute">ça fouette</a>
        </li>
        <li>
          <a href="proute">ça fouette</a>
        </li>
        <li>
          <a href="proute">ça fouette</a>
        </li>
      </ul>
    </q-navbar>

    <button @click="changeNavbarState()">Open navbar</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  navbarIsOpen: false
})

const changeNavbarState = (newValue = null) => {
  console.log(newValue);
  state.navbarIsOpen = newValue ?? !state.navbarIsOpen
}
</script>
