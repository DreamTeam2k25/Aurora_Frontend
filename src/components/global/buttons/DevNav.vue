<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const routes = router.getRoutes();
</script>

<template>
  <!-- Botão flutuante para abrir/fechar a navegação -->
  <button class="devnav-btn" @click="isOpen = !isOpen">
    <svg v-if="!isOpen" class="icon" viewBox="0 0 24 24">
      <!-- Ícone de olho aberto -->
      <path
        d="M12 4.5C6 4.5 1.73 9.61 1.73 9.61a1 1 0 000 1.18s4.27 5.11 10.27 5.11 10.27-5.11 10.27-5.11a1 1 0 000-1.18S18 4.5 12 4.5zm0 8.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        fill="white"
      />
    </svg>
    <svg v-else class="icon" viewBox="0 0 24 24">
      <!-- Ícone de X (fechar) -->
      <path
        d="M18.3 5.7a1 1 0 00-1.4 0L12 10.59 7.1 5.7a1 1 0 00-1.4 1.4L10.59 12l-4.9 4.9a1 1 0 001.4 1.4L12 13.41l4.9 4.9a1 1 0 001.4-1.4L13.41 12l4.9-4.9a1 1 0 000-1.4z"
        fill="white"
      />
    </svg>
  </button>

  <!-- Menu lateral -->
  <div v-if="isOpen" class="devnav">
    <h3>Dev Nav</h3>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.path }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Botão flutuante */
.devnav-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
}

.icon {
  width: 24px;
  height: 24px;
  fill: white;
}

/* Menu lateral */
.devnav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background: #111;
  color: white;
  padding: 20px;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
}

.devnav h3 {
  margin-bottom: 15px;
}

.devnav ul {
  list-style: none;
  padding: 0;
}

.devnav li {
  margin-bottom: 10px;
}

.devnav a {
  color: white;
  text-decoration: none;
}

.devnav a:hover {
  text-decoration: underline;
}
</style>
