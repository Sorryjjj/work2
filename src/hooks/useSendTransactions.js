import { reactive, ref } from 'vue'
import { sendTransaction } from "@api/api"

export default function useForm() {
    const isLoading = ref(false)
    const result = reactive({})

    const formData = reactive({
        namespace_id: '',
        data: ''
    })


    const submitForm = () => {
        isLoading.value = true
        sendTransaction({
            namespace_id: formData.namespace_id || "0000010000000100",
            data: formData.data || "f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5"
        }).then((res) => {
            result.value = res
            isLoading.value = false
        }).catch(() => {
            isLoading.value = false
            result.value = null
        })
    }

    return {
        formData,
        isLoading,
        result,
        submitForm
    }
}