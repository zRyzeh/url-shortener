import { z } from 'zod'

const userSchema = z.object({
  name: z.string()
    .min(3, 'Name must be a minimum of 3 characters')
    .max(64, 'Name must be a maximum of 64 characters'),

  email: z.email('Invalid email address'),

  password: z.string()
    .min(8, 'Password must be a minimum of 8 characters')
    .max(100, 'Password must be a maximum of 100 characters')
})

export const validateUser = (user: Record<string, unknown>) => {
  return userSchema.safeParse(user)
}
