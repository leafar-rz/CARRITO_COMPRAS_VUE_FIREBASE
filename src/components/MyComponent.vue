<!-- EJERCICIO 1 -->
<script setup>
    import {divVisible, miFuncion} from '../../JS/ejercicio1';
</script>
  
<template>
    <div v-if = "divVisible">
      <h1 class = "componente">Hi</h1>
      <img src = "../../img/medalla.jpeg">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe ullam tempore voluptatum doloremque nam eveniet recusandae quisquam eum, aut vel aspernatur, ut similique quia! Soluta, exercitationem. Aut, repudiandae. Eaque!</p>
    </div>

    <button @click = "miFuncion">Mostrar</button>
</template>