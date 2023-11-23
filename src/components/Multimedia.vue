<!-- EJERCICIO 2 -->
<template>
  <div>
    <!-- Botón para cambiar la imagen -->
    <button @click="cambiarImagen">Cambiar Imagen</button>
    <br><br>
    <!-- Imagen que se muestra según el índice actual -->
    <img :src="imagenActual">

    <br><br><br>
    
    <!-- Botón para cambiar el video -->
    <button @click="cambiarVideo">Cambiar Video</button>
    <br><br>
    
    <!-- Video que se muestra según el índice actual -->
    <iframe :src="videoActual" style="max-width: 100%; max-height: 400px;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Array de URLs de imágenes
      imagenes: [
        'https://i.pinimg.com/564x/13/38/fc/1338fc279e12900ca6386bd0cae31851.jpg',
        'https://i.pinimg.com/564x/13/0c/e4/130ce4c0c52ce8c7a4c3c121ed4cf28a.jpg',
        'https://i.pinimg.com/564x/9f/88/15/9f8815a64e518e086a5a14217eeb773d.jpg',
        'https://i.pinimg.com/564x/1a/21/55/1a2155291deef688505ce46375443295.jpg',
        'https://i.pinimg.com/564x/b5/56/15/b55615e882252a84ce15256f151bb87b.jpg'
      ],
      // Índice actual de la imagen seleccionada
      indiceImagenActual: 0,
      
      // Array de URLs de videos de YouTube
      videos: [
        'https://www.youtube.com/embed/wVEmcPJCkgU?si=Df_zLbI03iubHLu_',
        'https://www.youtube.com/embed/8QpblRyur-o?si=pGFt1mrIY9CCcIlh',
        'https://www.youtube.com/embed/XUCgFjefY7M',
        'https://www.youtube.com/embed/kLEU0DYU7BM?si=7C0y6eLe99IVr0qX',
        'https://www.youtube.com/embed/2eAaQfKyoQA?si=92Z8sKqW-dPQIEoT',
      ],
      // Índice actual del video seleccionado
      indiceVideoActual: 0,
    };
  },
  computed: {
    // Propiedad computada para obtener la URL de la imagen actual
    imagenActual() {
      return this.imagenes[this.indiceImagenActual];
    },
    // Propiedad computada para obtener la URL del video actual
    videoActual(){
      return this.videos[this.indiceVideoActual];
    },
  },
  methods: {
    // Método para cambiar a la siguiente imagen en el array
    cambiarImagen() {
      this.indiceImagenActual = (this.indiceImagenActual + 1) % this.imagenes.length;
    },
    // Método para cambiar al siguiente video en el array
    cambiarVideo(){
      this.indiceVideoActual = (this.indiceVideoActual + 1) % this.videos.length;
    },
  },
};
</script>
