<script setup>
  import {db} from '../assets/firebase.js';
  import {getDocs , collection} from 'firebase/firestore';
  import {ref , onMounted} from 'vue';

  const Usuarios = ref([]); // coleccion de datos de firebase

  onMounted(async() => {
    // Usuarios es la coleccion de datos anterior
    let usuariosCollection = await getDocs(collection(db, 'Usuarios')); 
    usuariosCollection.forEach((task) => { // va hacer una tarea
      // con esta funcion voy a recuperar mi coleccion de datos
      Usuarios.value.push({ ...task.data(), id: task.id });
    })

  });

  // Función para formatear la fecha sin hora
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
</script>

<template>
  <div v-for="task in Usuarios" :key="task.id">
    <div>
      Nombre: {{ task.nombre }}
    </div>
    <div>
      <img :src= " task.imagen " > 
      <!-- <iframe :src="task.imagen" height="336" width="236" frameborder="0" scrolling="no"></iframe> -->
    </div>
    <div>
      Numero de control: {{ task.nControl }}
    </div>
    <div>
      Carrera: {{ task.carrera }}
    </div>
    <div>
      <!-- Fecha de nacimiento: {{ task.fecha_nacimiento }} -->
      Fecha de nacimiento: {{ formatDate(task.fecha_nacimiento.toDate()) }}
    </div>
  </div>

</template>

<style>
</style>