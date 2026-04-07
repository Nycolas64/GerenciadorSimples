<template>
  <div class="form-container">
    <h1>Criar Nova Tarefa</h1>
    
    <div class="field">
      <label>Título:</label>
      <input v-model="title" placeholder="Ex: Estudar Vue.js" />
    </div>

    <div class="field">
      <label>Descrição:</label>
      <textarea v-model="description" placeholder="O que precisa ser feito?"></textarea>
    </div>

    <div class="field checkbox">
      <input type="checkbox" v-model="completed" id="status" />
      <label for="status">Já está concluída?</label>
    </div>

    <button @click="salvar" class="btn-salvar">Salvar Tarefa</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const description = ref('')
const completed = ref(false)

const salvar = async () => {
  if (!title.value) return alert("Digite ao menos um título!");
  
  try {
    await axios.post('http://localhost:8080/api/tasks', {
      title: title.value,
      description: description.value,
      completed: completed.value
    })
    router.push('/tasks')
  } catch (e) {
    alert("Erro ao conectar com o backend!")
  }
}
</script>

<style scoped>
.field { margin-bottom: 1.5rem; display: flex; flex-direction: column; }
input, textarea { padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; }
.checkbox { flex-direction: row; align-items: center; gap: 10px; }
.btn-salvar { background: #42b983; color: white; border: none; padding: 12px; width: 100%; border-radius: 4px; cursor: pointer; font-size: 1rem; }
.btn-salvar:hover { background: #3aa876; }
</style>