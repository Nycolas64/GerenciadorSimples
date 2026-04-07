<template>
  <div>
    <h1>Minhas Tarefas</h1>
    
    <div v-if="tasks.length === 0" class="empty">Nenhuma tarefa encontrada.</div>

    <div v-for="task in tasks" :key="task.id" class="task-card">
      <div class="task-info">
        <h3 :class="{ 'done-text': task.completed }">{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <span class="badge" :class="task.completed ? 'bg-success' : 'bg-warning'">
          {{ task.completed ? 'Concluída' : 'Pendente' }}
        </span>
      </div>
      <button @click="deletar(task.id)" class="btn-delete">Excluir</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const tasks = ref([])

const carregar = async () => {
  const res = await axios.get('http://localhost:8080/api/tasks')
  tasks.value = res.data
}

const deletar = async (id) => {
  if(confirm("Deseja apagar esta tarefa?")) {
    await axios.delete(`http://localhost:8080/api/tasks/${id}`)
    carregar()
  }
}

onMounted(carregar)
</script>

<style scoped>
.task-card { display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 1px solid #eee; }
.done-text { text-decoration: line-through; color: #888; }
.badge { font-size: 0.8rem; padding: 3px 8px; border-radius: 12px; color: white; }
.bg-success { background: #42b983; }
.bg-warning { background: #f39c12; }
.btn-delete { background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
.empty { text-align: center; color: #888; margin-top: 2rem; }
</style>