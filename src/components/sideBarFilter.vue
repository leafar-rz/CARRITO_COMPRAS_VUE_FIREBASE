<template>
  <div class="sidebar">
    <h2>Categorías</h2>
    <br />
    <ul>
      <li v-for="category in categories" :key="category.id">
        <hr />
        <br />
        {{ category.name }}
        <ul>
          <br />
          <button
            v-for="subCategory in category.subCategories"
            :key="subCategory.id"
            @click="selectSubCategory(subCategory)"
           id="btnSideBarFilter">
            <input
              type="checkbox"
              v-model="selectedCategories"
              :value="subCategory.id"
              @change="filterProducts"
            />
            {{ subCategory.name }}
          </button>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ref([
  {
    id: 1,
    name: 'JOYERIA',
    subCategories: [
      { id: 0, name: 'TODOS' },
      { id: 1, name: 'CHARMS' },
      { id: 2, name: 'BRAZALETES' },
      { id: 3, name: 'ANILLOS' },
      { id: 4, name: 'ARETES' },
      { id: 5, name: 'COLLARES Y DIJES' }
    ]
  }
])

const selectedCategories = ref([])

function selectSubCategory(subCategory) {
  localStorage.setItem('CategoryId', subCategory.id) // Cambiar id a subCategory.id
  localStorage.setItem('CategoryName', subCategory.name)
  if (router.currentRoute.value.path === '/home') {
    router.go(0)
  } else {
    router.push('/home')
  }
}

const filterProducts = () => {
  console.log('Filtered Products:', selectedCategories.value)
}

onMounted(() => {})
</script>

<style scoped>

</style>
