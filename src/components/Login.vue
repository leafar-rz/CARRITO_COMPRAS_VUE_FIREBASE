<script setup>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, onMounted } from 'vue';
const email = ref("");
const password = ref("");
import { useRouter } from 'vue-router'
const router = useRouter();


async function login() {

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Completa los campos");
    return;
  }

  let user;
  
  try {
    user = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
    alert('Inicio de sesión exitoso');
    const token = await user.user.getIdToken();
    localStorage.setItem('token', token);
    localStorage.setItem('CategoryId', 0);
    localStorage.setItem('validacion', true);
    router.push('/home');
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-credential':
        alert('Datos incorrectos');
        break;
      case 'auth/invalid-email':
        alert('Formato de correo electrónico inválido');
        break;
      case 'auth/user-disabled':
        alert('La cuenta de usuario ha sido deshabilitada');
        break;
      default:
        console.error(error);
        alert('Error desconocido durante el inicio de sesión');
    }
  }
  
}

onMounted(async () => {
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
})

</script>

<template>
    <div id="containerLogin">
        <div id="divLogin">

            <h1 id="labelLogin">INICIO DE SESION</h1>

            <div class="inputLogin-group">
                <div class="iconLogin">
                    <img src="../../img/EMAIL.png"
                        id="imgLogin1" />
                </div>
                <div class="inputLogin">
                    <label for="email" id="labelInputLogin1">Email</label><br>
                    <input type="email" id="emailLogin" placeholder="Email" v-model="email" required />
                </div>
            </div>

            <div class="inputLogin-group">
                <div class="iconLogin">
                    <img src="../../img/PASSWORD.png" id="imgLogin" />
                </div>
                <div class="inputLogin">
                    <label for="password" id="labelInputLogin">Contraseña</label>
                    <input type="password" id="password" placeholder="Password" v-model="password" required />
                </div>
            </div>

            <button @click="login" id="btnLogin">Login</button>
            <p style="font-weight: normal; text-align: center;">
                ¿No estás registrado? <router-link to="/register" style="text-decoration: none;">Registrarse</router-link>
            </p>
        </div>
    </div>
</template>
  
<style scoped>
/* @import "../styles/style.css"; */
</style>
  