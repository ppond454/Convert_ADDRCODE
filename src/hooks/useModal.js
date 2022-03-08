import { ref } from "vue"

const showModal = ref(false)

const useModal = () => {
  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  return {
    showModal,
    toggleModal,
  }
}

export default useModal
