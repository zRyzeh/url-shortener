import { Response } from "express"

export const response = (res: Response, data: any, statusCode?: number, message?: string) => {
  return res.status(statusCode || 200).json({
    status: 'success',
    message: message || 'Operation successful',
    data
  })
}