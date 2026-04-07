<template>
  <div class="form-container">
    <h1>Editar Tarefa</h1>
    
    <div class="field">
      <label>Título:</label>
      <input v-model="task.title" />
    </div>

    <div class="field">
      <label>Descrição:</label>
      <textarea v-model="task.description"></textarea>
    </div>

    <div class="field checkbox">
      <input type="checkbox" v-model="task.completed" id="status" />
      <label for="status">
        {{ task.completed ? 'Concluído' : 'Em andamento' }}
      </label>
    </div>

    <button @click="atualizar" class="btn-salvar">Salvar Alterações</button>
    <button @click="$router.push('/tasks')" class="btn-cancelar">Cancelar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const task = ref({ title: '', description: '', completed: false })

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/tasks/${route.params.id}`)
    task.value = response.data
  } catch (e) {
    alert("Erro ao carregar dados.")
  }
})

const atualizar = async () => {
  try {
    // Enviamos o objeto completo, incluindo o novo status (true ou false)
    await axios.put(`http://localhost:8080/api/tasks/${route.params.id}`, task.value)
    router.push('/tasks')
  } catch (e) {
    alert("Erro ao salvar.")
  }
}
</script>

<style scoped>
.field { margin-bottom: 1.2rem; display: flex; flex-direction: column; }
.checkbox { flex-direction: row; align-items: center; gap: 10px; font-weight: bold; }
input, textarea { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.btn-salvar { background: #42b983; color: white; border: none; padding: 10px; cursor: pointer; border-radius: 4px; }
.btn-cancelar { background: #95a5a6; color: white; border: none; padding: 10px; margin-top: 5px; cursor: pointer; border-radius: 4px; width: 100%; }
</style>