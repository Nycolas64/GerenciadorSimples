<template>
  <div>
    <h1>Minhas Tarefas</h1>
    
    <div v-if="tasks.length === 0" class="empty">Nenhuma tarefa encontrada.</div>

    <div v-for="task in tasks" :key="task.id" class="task-card">
      <div class="task-info">
        <h3 :class="{ 'done-text': task.completed }">{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <p><strong>Status:</strong> {{ task.completed ? 'Concluído' : 'Em andamento' }}</p>
      </div>

      <div class="task-actions">
        <router-link :to="`/editar/${task.id}`" class="btn-edit">✏️ Editar</router-link>
        <button @click="deletar(task.id)" class="btn-delete">Excluir</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const tasks = ref([])

const carregar = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/tasks')
    tasks.value = res.data
  } catch (e) {
    console.error("Erro ao carregar:", e)
  }
}

const deletar = async (id) => {
  if(confirm("Deseja apagar esta tarefa?")) {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`)
      carregar()
    } catch (e) {
      alert("Erro ao excluir!")
    }
  }
}

onMounted(carregar)
</script>

<style scoped>
.task-card { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 15px; 
  border-bottom: 1px solid #eee; 
}
.done-text { text-decoration: line-through; color: #888; }
.task-actions { display: flex; gap: 10px; }
.btn-edit { background: #3498db; color: white; text-decoration: none; padding: 8px 12px; border-radius: 4px; font-size: 0.9rem; }
.btn-delete { background: #e74c3c; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; }
.empty { text-align: center; color: #888; margin-top: 2rem; }
</style>