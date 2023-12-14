<script setup>
import { ref } from 'vue'

const popUp = ref(true)

function togglePopUp() {
  this.popUp = !this.popUp
  localStorage.setItem('validacion', false);
}

</script>

<template>
  <div class="pop-up" v-show="popUp" >
    <div class="pop-up-inner">
      <div class="pop-up-close" @click="togglePopUp()">&times;</div>

      <div class="anuncio-promocional">
        <img src="../../img/ESMERALDA_LOGO.png" alt="Esmeralda Joyería Logo" class="logo" width="30%" />
        <h1 class="color">¡Ilumina tu Navidad con Esmeralda Joyería!</h1>
        <p>
          Descubre la elegancia atemporal y la calidad excepcional de nuestras joyas, perfectas para
          celebrar momentos especiales.
        </p>
        <p>
          Esta temporada, regala belleza con descuentos exclusivos en cada compra. ¡Haz que esta
          Navidad sea verdaderamente inolvidable!
        </p>
        <div class="descuentos">
          <p>
            <span class="destacado">🌟 Descuento Especial de Navidad:</span> 20% de descuento en
            toda la colección.
          </p>
          <p>
            <span class="destacado">✨ Compra con Confianza:</span> Garantía de devolución extendida
            hasta 30 días.
          </p>
          <p>
            <span class="destacado">🎁 Envoltura de Regalo Gratuita:</span> Todos los pedidos
            incluyen un elegante empaque festivo.
          </p>
        </div>
        <p class="">¡Visítanos hoy mismo y encuentra la joya perfecta para tus seres queridos!</p>
        <br />
        <button class="btn" @click="togglePopUp()">Explora la Colección</button>
        <p class="condiciones">
          *Oferta válida hasta el 31 de diciembre. Se aplican términos y condiciones.
          ¡Esmeralda Joyería - Donde la elegancia encuentra su hogar! 🎄✨
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
