import { PrismaClient } from "@prisma/client"
import { IUserModel } from "../interfaces/models/IUserModel"

const prisma = new PrismaClient()

export const UserModel: IUserModel = class {
  static getUserById = (async ({ id }: { id: string }) => {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    return user
  })

  static getUserByEmail = (async ({ email }: { email: string }) => {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return user
  })

  static findUserWithUrl = (async ({ userId, url }: { userId: string, url: string }) => {
    const userWithUrl = await prisma.user.findFirst({
      where: {
        id: userId,
        urls: {
          some: {
            url
          }
        }
      }
    })

    return userWithUrl
  })

  static createUser = (async ({ name, email, password }: { name: string, email: string, password: string }) => {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    return user
  })
}