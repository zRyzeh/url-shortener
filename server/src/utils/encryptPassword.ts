import bcrypt from 'bcrypt'

export const encryptPassword = async (password: string) => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)

  return hashedPassword
}

export const comparePassword = async (password: string, encryptedPassword: string) => {
  return await bcrypt.compare(password, encryptedPassword)
}