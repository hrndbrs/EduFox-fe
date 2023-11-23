import { toast } from "vue3-toastify"

export const createToast = (message, type = "default", options = {}) => {
    return toast(message, {
        position: 'top-center',
        type,
        theme: 'colored',
        pauseOnHover: true,
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
        ...options
    })
}