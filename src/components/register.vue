<script setup>
import { ref } from "vue";
import { app } from ".././assets/firebase.js"; // Asegúrate de proporcionar la ruta correcta a tu archivo firebase.js

const email = ref("");
const password = ref("");
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
const router = useRouter();

const register = () => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("Successfully registered!");
            alert("Registro exitoso");
            router.push('/');
        })
        .catch((error) => {
            console.error(error.code, error.message);
            alert("Error en el registro: " + error.message);
        });
};
</script>


<template>
    <div id="containerRegister">
        <div id="divRegister">

            <h1 id="labelRegister">REGISTRO</h1>

            <div class="input-groupRegister">
                <div class="iconRegister">
                    <img src="../../img/EMAIL.png"
                        id="imgRegister1" />
                </div>
                <div class="inputRegister">
                    <label for="email" id="labelInputRegister1">Email</label><br>
                    <input type="email" id="emailRegister" placeholder="Email" v-model="email" required />
                </div>
            </div>

            <div class="input-groupRegister">
                <div class="iconRegister">
                    <img src="../../img/PASSWORD.png" id="imgRegister" />
                </div>
                <div class="inputRegister">
                    <label for="password" id="labelInputRegister">Contraseña</label>
                    <input type="password" id="password" placeholder="Password" v-model="password" required />
                </div>
            </div>

            <button @click="register" id="btnRegister">Registrar</button>
            <p style="font-weight: normal;">¿Ya estas registrado? <router-link to="/" style="text-decoration: none;">Login</router-link></p>
        </div>
    </div>
</template>
  
<style scoped>

</style>
  

