<template>
  <div>
    <table align="center">
      <!-- Primera fila de la tabla -->
      <tr>
        <!-- Celda 1 - Logo de la tienda -->
        <th id="th1Header">
          <a href="/#/home">
            <img src="../../img/ESMERALDA_LOGO.png" alt="" style="width: 80%" />
          </a>
        </th>
        <!-- Celda 2 - Campo de búsqueda de productos -->
        <th id="th2Header">
          <input type="text" id="miInputHeader" placeholder="Busca tu producto" />
        </th>
        <!-- Celda 3 - Icono de búsqueda -->
        <th id="th3Header">
          <img src="../../img/SEARCH.png" alt="" style="width: 35%" />
        </th>
        <!-- Celda 4 - Enlace a la página de inicio de sesión -->
        <th id="th3Header">
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1250/1250678.png"
              alt=""
              style="width: 45%"
              @click="Salir()"
            />
          </a>
        </th>
        <!-- Celda 5 - Icono de la bolsa de compras -->
        <th id="th3Header">
          <a href="/#/carrito">
            <img src="../../img/BOLSA-_COMPRAS.png" alt="" style="width: 40%" />
          </a>
        </th>
      </tr>

      <!-- Segunda fila de la tabla -->
      <tr>
        <!-- Celda 1 - Área para mostrar categorías de productos -->
        <th id="th4Header" colspan="5">
          <br/>
          <div id="divCategoriasHeader"></div>
          <button id="btnCategoriaHeader" @click="selectSubCategory(0, 'TODOS')">TODOS</button>
          <button id="btnCategoriaHeader" @click="selectSubCategory(1, 'CHARMS')">CHARMS</button>
          <button id="btnCategoriaHeader" @click="selectSubCategory(2, 'BRAZALETES')">BRAZALETES</button>
          <button id="btnCategoriaHeader" @click="selectSubCategory(3, 'ANILLOS')">ANILLOS</button>
          <button id="btnCategoriaHeader" @click="selectSubCategory(4, 'ARETES')">ARETES</button>
          <button id="btnCategoriaHeader" @click="selectSubCategory(5, 'COLLARES Y DIJES')">
            COLLARES Y DIJES
          </button>
        </th>
      </tr>

      <!-- Tercera fila de la tabla -->
      <tr>
        <!-- Celdas 1-5 - Área para mensajes promocionales o anuncios -->
        <th colspan="5">
          <div id="divIdHeader">
            <p id="pDivHeader">Arma tu Set: Lleva 1 Brazalete y 2 Charms por $3,490 ¡Ver Ahora!</p>
          </div>
        </th>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { signOut } from "firebase/auth";
const router = useRouter()

async function Salir() {
  alert('Pasa un buen dia')
  const auth = getAuth()

  signOut(auth)
    .then(() => {
      console.log('Pasa un buen dia')
      localStorage.removeItem('token') // Eliminar el email del localStorage
      router.push('/')
    })
    .catch((error) => {
      alert(error.message)
      console.log(error)
      router.push('/')
    })
}

function selectSubCategory(subCategory, name) {
  localStorage.setItem('CategoryId', subCategory)
  localStorage.setItem('CategoryName', name)

  if (router.currentRoute.value.path === '/home') {
    router.go(0) //recarga la pagina /home
  } else {
    router.push('/home')
  }
}
</script>

<style scoped>

</style>
