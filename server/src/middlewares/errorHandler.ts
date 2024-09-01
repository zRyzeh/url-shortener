import { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/errors"

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const { statusCode, message, stack } = err

  if (err instanceof AppError) {
    return res.status(statusCode).json({
      status: 'error',
      message: message,
      data: null
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(`Error: ${message}`, stack)

    return res.status(statusCode || 500).json({
      status: 'error',
      message,
      data: null,
      stack
    })
  }

  res.status(statusCode || 500).json({
    status: 'error',
    message: 'Internal Server Error',
    data: null
  })
}