<template>
  <div>
    <q-navbar :is-open="state.navbarIsOpen" @is-open="changeNavbarState">
      <q-navbar-content class="bg-red-500">
        <q-menu>
          <q-menu-item>Swap</q-menu-item>
          <q-menu-item>Stacking</q-menu-item>
          <q-menu-item>Farm</q-menu-item>
          <q-menu-item>Wallet</q-menu-item>
        </q-menu>
      </q-navbar-content>
<!--      <div class="site-logo">-->
<!--        <a href="acceuil.html">Acceuil</a>-->
<!--        <img class="logo" src="images/Logo_Laroche.svg" alt="" />-->
<!--      </div>-->

<!--      <ul>-->
<!--        <li>-->
<!--          <a href="proute">ça fouette</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="proute">ça fouette</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="proute">ça fouette</a>-->
<!--        </li>-->
<!--      </ul>-->
    </q-navbar>
    <button @click="changeNavbarState()">Open navbar</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  navbarIsOpen: true
})

const changeNavbarState = (newValue = null) => {
  console.log(newValue);
  state.navbarIsOpen = newValue ?? !state.navbarIsOpen
}
</script>
