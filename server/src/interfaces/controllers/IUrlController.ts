import { Request, Response } from "express"

export interface IUrlController {
  getUrlById: (req: Request, res: Response) => Promise<Response>
  createUrl: (req: Request, res: Response) => Promise<Response>
}