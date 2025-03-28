import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSsoStore = defineStore('SsoStore', () => {
  // const ssoResponse = ref<string>('')

  const ssoResponseString = ref<string>(localStorage.getItem('ssoResponse') ?? '{}')

  const ssoResponse = computed(() => {
    return JSON.parse(ssoResponseString.value)
  })

  return { ssoResponse, ssoResponseString }
})
