import {z} from 'zod'

const regex = /^[^\s]*$/gm;

export const NewEmailSchema = z.object({
    name: z.string().nonempty().min(3).max(30).regex(regex),
    email: z.string().email().nonempty(),
    topic: z.string().nonempty().max(30),
    emailText: z.string().nonempty().min(10).max(300)
})

export type NewEmailData = z.infer<typeof NewEmailSchema>