import { NextFunction, Request, Response } from "express"

export interface IUserController {
  getUserByEmail: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
  createUser: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
}