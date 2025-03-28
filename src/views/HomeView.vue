<template>
  <div class="">
    <div class="">
      <button @click="test">Print</button>
    </div>
    <div class="">
      <button @click="clearLocalStorage">Clear</button>
    </div>

    <div class="container-fluid text-danger">

      <!-- <table>
        <tbody>
          <tr v-for="(value, key) in response" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table> -->

      <hr>

      <div v-for="(value, key) in filteredFesponse" :key="key">
        <span>{{ value[0] }}</span>:
        <span>{{ value[1] }}</span>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">
import { useSsoStore } from '@/stores/ssoStore';
import { computed, onMounted } from 'vue';

const ssoStore = useSsoStore();

const response = computed(() => ssoStore.ssoResponse);

const allowedKeys = ['given_name', 'email'];


const filteredFesponse = computed(() => {

  if (!ssoStore.ssoResponse) return {};

  const result = Object.entries(ssoStore.ssoResponse).filter(([key]) => allowedKeys.includes(key));


  return result ?? '';
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const test = () => {
  console.log(ssoStore.ssoResponse)
}

const clearLocalStorage = () => {
  console.log('clear')
  ssoStore.ssoResponseString = '{}'
  localStorage.clear()
}
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

onMounted(() => {
  console.log('On mounted');
  console.log(ssoStore.ssoResponse)
  console.log(ssoStore.ssoResponse.picture)
  // ssoStore.ssoResponse = localStorage.getItem("ssoResponse") ?? ""
})
</script>
