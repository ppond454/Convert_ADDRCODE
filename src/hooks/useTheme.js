import { ref } from "vue"

let sw = ref("Cocho-mint")
let isChangeTheme = ref(false)

const useTheme = () => {
  if (localStorage.getItem("SwTheme")) {
    if (localStorage.getItem("SwTheme") === "true") {
      isChangeTheme.value = true
      sw.value = "Yogurt"
    }
    if (localStorage.getItem("SwTheme") === "false") {
      isChangeTheme.value = false
      sw.value = "Cocho-mint"
    }
  }

  const onTheme = () => {
    if (sw.value === "Yogurt") {
      sw.value = "Cocho-mint"
      isChangeTheme.value = false
      localStorage.setItem("SwTheme", false)
      return sw.value
    }
    if (sw.value === "Cocho-mint") {
      sw.value = "Yogurt"
      isChangeTheme.value = true
      localStorage.setItem("SwTheme", true)
      return sw.value
    }
  }

  return {
    onTheme,
    isChangeTheme,
    sw,
  }
}

export default useTheme
