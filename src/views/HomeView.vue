<template>
  <div>
    <h2>Test</h2>
    <GoogleLogin :callback="callback" propmt />
  </div>

  <div>
    <h4>{{ result }}</h4>
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
