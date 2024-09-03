import z from 'zod'
import { IUser } from '../interfaces/IUser'

const userSchema = z.object({
  name: z.string({ required_error: 'Name is required' })
    .min(3, { message: 'Name must be a minimum of 3 characters' })
    .max(64, { message: 'Name must be a maximum of 64 characters' }),

  email: z.string({ required_error: 'Email is required' })
    .email({ message: "Invalid email address" }),

  password: z.string({ required_error: 'Password is required' })
    .min(8, { message: 'Name must be a minimum of 8 characters' })
    .max(100, { message: 'Name must be a maximum of 100 characters' })
})

export const validateUser = (user: IUser) => {
  return userSchema.safeParse(user)
}