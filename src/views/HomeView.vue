<template>
  Welcome to {{ 'yourSiteName' }}
  <div @click="signInWithGoogle">
    Continue with google
  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'
import { googleSdkLoaded } from 'vue3-google-login'


// Composables
const userStore = useUserStore()

// const { clientId } = storeToRefs(userStore)

const { fetchUserDataFrom } = userStore

// Methods
const signInWithGoogle = () => {
  googleSdkLoaded(google => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: userStore.clientId, ////clientId.value,
        scope: 'email profile openid',
        redirect_uri: import.meta.env.VITE_APP_REDIRECT_URL,
        callback: response => {
          if (response.code)
            fetchUserDataFrom(response.code)
        },
      })
      .requestCode()
  })
}





</script>
