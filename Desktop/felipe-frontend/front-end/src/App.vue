<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/tasks" class="nav-link">Lista de Tarefas</RouterLink>
      <RouterLink to="/nova" class="nav-link btn-nova">+ Nova Task</RouterLink>
    </nav>
  </header>

  <main class="container-principal">
    <router-view />
  </main>
</template>

<style>
/* Remove o layout dividido padrão do Vue */
#app {
  display: block; /* Garante que não use o grid/flex padrão */
  max-width: 100vw;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

body {
  margin: 0;
  background-color: #f4f7f6;
  font-family: sans-serif;
}

.navbar {
  background: #2c3e50;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

.btn-nova {
  background: #42b983;
  padding: 5px 15px;
  border-radius: 4px;
}

.container-principal {
  max-width: 800px;
  margin: 2rem auto; /* Centraliza o conteúdo no meio da tela */
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>