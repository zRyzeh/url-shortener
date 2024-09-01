import { Request, Response } from "express";
import { IUserController } from "../interfaces/controllers/IUserController";
import { UserModel } from "../Models/UserModel";

export class UserController implements IUserController {
  getUserByEmail = async (req: Request, res: Response) => {
    const { email } = req.query;
    if (typeof email !== 'string' || !email) return res.status(400).send({ error: 'Email is required' })

    const user = await UserModel.getUserByEmail({ email })

    if (!user) return res.status(404).send({ error: 'User does not exist' })

    return res.send(user)
  }

  createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    const userExist = await UserModel.getUserByEmail({ email })

    if (userExist) return res.status(400).send({ error: 'User alredy exist' })
    if (!name || !email || !password) return res.sendStatus(403)

    const newUser = await UserModel.createUser({ name, email, password })

    return res.send(newUser)
  }
}