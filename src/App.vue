<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue';
import Footer from './components/footer.vue';
import sidebar from './components/sidebarfilter.vue';

</script>

<template>
  <div>
    <Header />
    <div class="app-container">
      <sidebar />
      <div class="main-content">
        <RouterView /> 
      </div>
    </div>
    <Footer />
  </div>
  
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 70vh;
  width: auto;
  position: relative;
}

.main-content {
  overflow-y: auto; /* Permitir el desplazamiento vertical */
  padding-top: 1%; /* Altura del Header */; /* Ajusta esto según la altura de tu Header */
  scrollbar-width: thin; /* Configurar el ancho de la barra de desplazamiento en navegadores compatibles con WebKit */
  scrollbar-color: rgb(49, 96, 216) transparent; /* Configurar el color de la barra de desplazamiento en navegadores compatibles con WebKit */
}

.main-content::-webkit-scrollbar {
  width: 8px; /* Ancho de la barra de desplazamiento en navegadores compatibles con WebKit */
}

.main-content::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255); /* Color del pulgar de la barra de desplazamiento en navegadores compatibles con WebKit */
}
</style>
