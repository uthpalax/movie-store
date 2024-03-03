import { ref, watchEffect, toValue } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T>()
  const error = ref()
  
  watchEffect(async () => {
    data.value = undefined
    error.value = ''
    
    const urlValue = toValue(url)
    
    try {
    	const res = await fetch(urlValue)
	    data.value = await res.json()
    } catch (e) {
        error.value = e as string;
    }
  })

  return { data, error }
}
