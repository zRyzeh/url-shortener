import { NextFunction, Request, Response } from "express"

export interface IUrlController {
  getUrlById: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
  createUrl: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
}