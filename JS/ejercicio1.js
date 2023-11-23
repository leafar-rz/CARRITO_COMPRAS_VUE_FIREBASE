import { ref } from 'vue';
export const divVisible = ref(false);
export function miFuncion() {
    divVisible.value = !divVisible.value;
}