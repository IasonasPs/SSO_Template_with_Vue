<template>
  <div class="bg-secondary-subtle justify-content-between "> <!-- -->
    <div class="d-flex flex-wrap gap-3 bg-light align-items-end">
      <RouterLink to="/" class="nav-link bg-secondary  d-flex align-items-center text-light">Home</RouterLink>
      <RouterLink to="/about" class="nav-link bg-secondary d-flex align-items-center text-light">Work</RouterLink>
      <RouterLink to="/about" class="nav-link bg-secondary d-flex align-items-center text-light">About</RouterLink>
    </div>

    <div class="d-flex">
      <p>Welcome </p>
    </div>

    <div class="d-flex" v-if="route.name == 'home' && !ssoStore.ssoResponse.given_name">
      <GoogleLogin :callback="callback" propmt class="" />
    </div>

    <div class="">

    </div>

  </div>
</template>



<script setup lang="ts">
import { useSsoStore } from '@/stores/ssoStore';
import { RouterLink, useRoute } from 'vue-router';
import { decodeCredential } from 'vue3-google-login'

const ssoStore = useSsoStore();
// const welcome = ssoStore.ssoResponse.given_name;

const route = useRoute()


const callback = (response: { credential: string; }) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  const userData = decodeCredential(response.credential)
  const jsonData = JSON.stringify(userData);
  ssoStore.ssoResponseString = jsonData;
  localStorage.setItem('ssoResponse', jsonData)
}

const clearLocalStorage = () => {
  console.log('clear')
  ssoStore.ssoResponseString = '{}'
  localStorage.clear()
}

</script>

<style scoped>
.fnav {
  background-color: rgb(104, 104, 104);
}
</style>
