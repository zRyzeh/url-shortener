export class AppError extends Error {
  public statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(message, 404)
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, 400)
  }
}

export class UnprocessableContent extends AppError {
  constructor(message = "Unprocessable Content") {
    super(message, 422)
  }
}

export class Unauthorized extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401)
  }
}

export class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super(message, 409)
  }
}