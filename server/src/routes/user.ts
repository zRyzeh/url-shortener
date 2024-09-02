import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { catchAsync } from "../utils/catchAsync";

export const createUserRouter = () => {
  const routerUser = Router()
  const userController = new UserController()

  routerUser.get('/', catchAsync(userController.getUserByEmail))
  routerUser.post('/', catchAsync(userController.createUser))
  routerUser.post('/login', catchAsync(userController.loginUser))
  return routerUser
}