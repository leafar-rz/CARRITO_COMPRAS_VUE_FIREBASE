<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const total = ref(0);
const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);
const vacio = ref(true);

let subCategory = 0;
let name = "TODOS";

onMounted(() => {
    let sum = 0;
    if (Array.isArray(cart.value)) {
        cart.value.forEach(element => {
            sum += element.precio * element.cantidad;
        });
        total.value = sum;
        console.log('Total a pagar:', sum);
    } else {
        console.error('El carrito no es un array válido.');
    }

    // Verificar si carrito está vacío
    if (cart.value.length > 0) {
        vacio.value = false;
    } else {
        vacio.value = true;
    }


});

// Script
function quitar(producto) {
    const indice = cart.value.indexOf(producto);
    cart.value.splice(indice, 1);
    total.value -= (producto.precio * producto.cantidad);
}

function pagar() {

    alert("Gracias por su compra");

    localStorage.setItem('cart', JSON.stringify([]));

    localStorage.setItem('CategoryId', subCategory);
    localStorage.setItem('CategoryName', name);

    router.push('/home');
}
</script>

<template>
    <div v-show="vacio"><br><br><br><br><br><br>
        <table align="center">
            <tr>
                <th>
                    <p id="pCarrito">CARRITO VACIO</p>
                </th>
            </tr>
        </table>
    </div>

    <div v-show="!vacio">
        <table>
            <tr>
                <th style="width: 5%;">

                </th>
                <th style="width: 20%; height: 50%;">
                    <p id="pPrice">Imagen</p>
                </th>
                <th style="width: 55%;">
                    <p id="pPrice">Descripcion</p>
                </th>
                <th style="width: 150px;">
                    <p id="pPrice">Precio</p>
                </th>
                <th style="width: 150px;">
                    <p id="pPrice">Total</p>
                </th>
            </tr>
        </table>

        <div v-for="articulo in cart" :key="articulo.id">
            <table>
                <tr>
                    <th style="width: 5%;">
                        <button id="btnCarrito" @click="quitar(articulo)">-</button>
                    </th>
                    <th style="width: 20%; height: 50%;">
                        <img id="imgCart" :src="articulo.img" style="width: 100%;height: 200px;">
                    </th>
                    <th style="width: 55%; text-align: left;">
                        <p id="pCart">{{ articulo.descripcion }}</p>
                    </th>
                    <th style="width: 150px;">
                        <p id="pPrice">${{ articulo.precio }}</p>
                    </th>
                    <th style="width: 150px;">
                        <p id="pPrice">${{ articulo.precio * articulo.cantidad }}</p>
                    </th>
                </tr>
            </table>

        </div>

        <table align="right">
            <tr>
                <th colspan="5">
                    <p id="pPrice">Total ${{ total }}</p>
                </th>
            </tr>
        </table><br><br>

        <table align="center">
            <tr>
                <th>
                    <button
                        style="border-radius: 20px;background-color: rgb(254, 191, 160);color: black;width: 300px;height: 35px;font-size: 25px;border: none;"
                        @click="pagar()">Pagar</button>
                </th>
            </tr>
        </table>
    </div>



    <br><br><br><br><br><br><br><br>
</template>

<style scoped>
</style>
