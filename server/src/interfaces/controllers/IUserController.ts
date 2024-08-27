import { Request, Response } from "express"

export interface IUserController {
  getUserByEmail: (req: Request, res: Response) => Promise<Response>
  createUser: (req: Request, res: Response) => Promise<Response>
}