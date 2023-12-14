<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../assets/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import PopUp from '../components/PopUp.vue'

const Articles = ref([])
const cantidad = ref(1) // Agrega la referencia para la cantidad
const name = ref('TODOS')
const validacion = ref(false)

onMounted(async () => {
  const selectedCategoryId = localStorage.getItem('CategoryId')
  name.value = localStorage.getItem('CategoryName')
  validacion.value = localStorage.getItem('validacion') === 'true'
  console.log(`Esta fue la categoría seleccionada: ${selectedCategoryId}`);

  if (selectedCategoryId == 0) {
    const articlesQuery = query(collection(db, 'Articulos'))

    const articlesCollection = await getDocs(articlesQuery)

    articlesCollection.forEach((task) => {
      Articles.value.push({ ...task.data(), id: task.id })
      console.log(task.data(), 'id:' + task.id)
    })
  } else {
    Articles.value = []
    console.log(': ' + selectedCategoryId);

    const articlesQuery = query(collection(db, 'Articulos'),
      where('CATEGORIAS_id', '==', parseInt(selectedCategoryId))
    )

    const articlesCollection = await getDocs(articlesQuery)

    articlesCollection.forEach((task) => {
      Articles.value.push({ ...task.data(), id: task.id })
      console.log(task.data(), 'id:' + task.id)
    })
  }
})

function AddCart(idP, descripcionP, imgP, precioP, existenciasP) {
  // Obtén el contenido actual del carrito de localStorage y conviértelo a un objeto JavaScript
  const carrito = JSON.parse(localStorage.getItem('cart')) || []

  const producto = {
    id: idP,
    descripcion: descripcionP,
    img: imgP,
    precio: precioP,
    cantidad: parseInt(cantidad.value),
    existencias: existenciasP
  }

  carrito.push(producto);

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem('cart', JSON.stringify(carrito))

  alert('Producto agregado al carrito con éxito')
}
</script>

<template>
  <div v-if="validacion">
    <PopUp />
  </div>

  <div id="divPublicidad">
    <img src="../../img/PUBLICIDAD.png" alt="" style="width: 100%" />
  </div>

  <div style="margin-top: 10px">
    <p id="pCategoria">{{ name }}</p>
  </div>

  <div class="fila">
    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" />
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">Precio ${{ task.precio }}</p>
      <input id="cantidadInput" type="number" min="1" :max="task.existencias" v-model="cantidad" />
      <button
        id="btnAdd"
        @click="AddCart(task.id, task.descripcion, task.img, task.precio, task.existencias)"
      >
        + Agregar
      </button>
    </div>
  </div>

  <br /><br /><br /><br />
</template>

<style scoped>

</style>