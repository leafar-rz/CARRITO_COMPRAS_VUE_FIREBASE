<script setup>
  import hijoVue from './components/child.vue';
  import { ref } from 'vue';
</script>

<template>
  <div id="app"> 
    <!-- <hijoVue></hijoVue> -->
    <img src="./assets/logo.svg" alt="Vue logo">
    <router-view></router-view>
  </div>
</template>

<style></style>