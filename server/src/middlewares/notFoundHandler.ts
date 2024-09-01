import { Request, Response } from 'express'

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Cannot GET ' + req.originalUrl,
    data: null
  })
}