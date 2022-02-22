import { useRef} from "react"
import { useNewEmailForm } from "./useNewEmailForm"
import {toast} from 'react-toastify'
import { NewEmailData } from "./NewEmailSchema"
import emailjs from '@emailjs/browser'


export const useNewEmail = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const { handleSubmit, reset, ...form} = useNewEmailForm()

    const onValidSubmit = (formData: NewEmailData) => {
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!, formRef.current!, process.env.NEXT_PUBLIC_EMAIL_USER_ID)
      .then((result) => {
        console.log(result.text);
        toast.success('Email wysłany pomyślnie!', {position: "bottom-right"})
        reset()
      }, (error) => {
        console.log(error.text);
      });

        
    }

    return {
        formRef,
        form: {
            ...form,
            handleSubmit: handleSubmit(onValidSubmit, (error) =>{
              toast.error("Błąd w formularzu", {position:"bottom-right"})
              console.log(error)
            } )
        }
    }
}