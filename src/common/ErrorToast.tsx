import { toast } from "react-toastify"


export const ErrorToast = (message: string) => {
    return toast.error(message)
}