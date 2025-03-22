<template>
  <div>
    <GoogleLogin :callback="callback" propmt />
  </div>

  <div>
    <!-- <h4>{{ result }}</h4> -->
    <table>
      <tbody>
        <tr v-for="(value, key) in result" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { decodeCredential } from 'vue3-google-login'

const result = ref<object>({})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callback = (response: any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  const userData = decodeCredential(response.credential)
  result.value = userData
}
</script>
