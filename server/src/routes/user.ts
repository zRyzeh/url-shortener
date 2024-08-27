import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const createUserRouter = () => {
  const routerUser = Router()
  const userController = new UserController()

  routerUser.get('/', userController.getUserByEmail)
  routerUser.post('/', userController.createUser)
  return routerUser
}