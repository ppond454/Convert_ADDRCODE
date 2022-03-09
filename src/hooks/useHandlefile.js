import { ref } from "vue"
import axios from "axios"
import { useToast } from "vue-toastification"

import useModal from "./useModal"

const toast = useToast()
const { toggleModal } = useModal()
let file = ref(null)
let nameFile = ref(null)
let isUploaded = ref(null)
let isLoading = ref(false)

const Handlefile = () => {
  const isCSV = (filename) => {
    let fileExtension = filename.replace(/^.*\./, "")
    console.log(fileExtension)
    return fileExtension
  }

  const selectFile = (e) => {
    console.log(e)

    if (e.target.files.length === 0) return

    let typeFile = isCSV(e.target.files[0].name)
    if (typeFile === "csv" || typeFile === "CSV") {
      file.value = e.target.files[0]
      nameFile.value = e.target.files[0].name
      console.log(nameFile.value)
    } else {
      file.value = null
      nameFile.value = null
      toggleModal()
    }
  }
  const clearData = () => {
    file.value = null
    nameFile.value = null
  }

  const showToast = () => {
    toast.success("Started Downloading file", {
      position: "top-left",
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false,
    })
  }
  const handleFileDownload = async () => {
    isLoading.value = true
    if (isUploaded !== null) {
      try {
        const res = await axios.get(
          `http://127.0.0.1:4000/download/${isUploaded.value}`,
          {
            responseType: "blob",
          }
        )

        let FILE = window.URL.createObjectURL(new Blob([res.data]))

        let docUrl = document.createElement("a")
        docUrl.href = FILE
        docUrl.setAttribute("download", `CAC_${nameFile.value}`)
        document.body.appendChild(docUrl)
        docUrl.click()
        clearData()
        isUploaded.value = null
        isLoading.value = false
        showToast()
      } catch (e) {
        throw new Error()
        isLoading.value = false
      }
    }
  }

  const handleFileUpload = async () => {
    isLoading.value = true
    const formData = new FormData()
    formData.append("file", file.value)
    console.log("select file", formData)

    try {
      const res = await axios.post("http://127.0.0.1:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      const data = await res.data

      if (res.status === 201) {
        isUploaded.value = data.id
        isLoading.value = false
      }
    } catch (e) {
      throw new Error(e)
      isLoading.value = false
    }
  }

  return {
    selectFile,
    handleFileUpload,
    clearData,
    handleFileDownload,
    file,
    nameFile,
    isUploaded,
    isLoading,
  }
}
export default Handlefile
