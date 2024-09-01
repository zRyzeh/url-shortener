import { NextFunction, Request, Response } from "express";
import { IUserController } from "../interfaces/controllers/IUserController";
import { UserModel } from "../Models/UserModel";
import { BadRequestError, ConflictError, NotFoundError } from "../utils/errors";
import { response } from "../utils/response";

export class UserController implements IUserController {
  getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.query;
    if (typeof email !== 'string' || !email) return next(new BadRequestError('Email is required'))

    const user = await UserModel.getUserByEmail({ email })
    if (!user) return next(new NotFoundError('User not found'))

    return response(res, user)
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body
    const userExist = await UserModel.getUserByEmail({ email })

    if (userExist) return next(new ConflictError('User alredy exist'))
    if (!name || !email || !password) return next(new BadRequestError('Name, email and password are required'))

    const newUser = await UserModel.createUser({ name, email, password })

    return response(res, newUser, 201, 'User created successfully')
  }
}