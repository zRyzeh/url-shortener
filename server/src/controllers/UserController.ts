import { NextFunction, Request, Response } from "express";
import { IUserController } from "../interfaces/controllers/IUserController";
import { UserModel } from "../Models/UserModel";
import { ConflictError, NotFoundError, Unauthorized, UnprocessableContent } from "../utils/errors";
import { response } from "../utils/response";
import { validateUser } from "../schemas/userSchema";
import { ZodError } from "zod";

export class UserController implements IUserController {
  getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.query as { email: string }
    // Validation is missing

    const user = await UserModel.getUserByEmail({ email })
    if (!user) return next(new NotFoundError('User not found'))

    return response(res, user)
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    const validation = validateUser(req.body)

    if (validation.error) {
      const error = JSON.parse(validation.error.message) as Array<ZodError>
      const errorMessage = error.map(obj => obj.message).join(', ')
      return next(new UnprocessableContent(errorMessage))
    }

    const { name, email, password } = validation.data

    const userExist = await UserModel.getUserByEmail({ email })
    if (userExist) return next(new ConflictError('User alredy exist'))

    const newUser = await UserModel.createUser({ name, email, password })
    return response(res, newUser, 201, 'User created successfully')
  }

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as { email: string, password: string }
    // Validation is missing
    const userExist = await UserModel.getUserByEmail({ email })
    if (!userExist) return next(new NotFoundError('User not found'))

    const authenticatedUser = await UserModel.loginUser({ email, password })
    if (!authenticatedUser) return next(new Unauthorized('Invalid credentials'))

    return response(res, authenticatedUser, 201, 'User authenticated successfully')
  }
}