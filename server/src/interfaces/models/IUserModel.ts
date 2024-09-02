import { User } from "@prisma/client"

export interface IUserModel {
  getUserById: (params: { id: string }) => Promise<User | null>
  getUserByEmail: (params: { email: string }) => Promise<User | null>
  findUserWithUrl: (params: { userId: string, url: string }) => Promise<User | null>
  createUser: (params: { name: string, email: string, password: string }) => Promise<User | null>
  loginUser: (params: { email: string, password: string }) => Promise<User | null>
}