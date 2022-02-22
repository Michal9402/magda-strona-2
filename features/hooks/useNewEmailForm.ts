import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { NewEmailData, NewEmailSchema } from "./NewEmailSchema"


export const useNewEmailForm = () => {
    return useForm<NewEmailData>({
        resolver: zodResolver(NewEmailSchema),
        defaultValues:{
            name: "",
            email: "",
            topic: '',
            emailText:''
        }
    })
}