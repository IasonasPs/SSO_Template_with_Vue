<template>
  <div class="appmaindiv ph-100">
    <NavBar class="nav" />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>



<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  /* position: absolute; */

}

/* .container {
  background-color: rgb(137, 177, 214);
} */

.appmaindiv {
  background-color: rgb(0, 0, 0);
  height: 100vh;
}
</style>
