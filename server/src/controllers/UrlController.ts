import { NextFunction, Request, Response } from "express"
import { IUrlController } from "../interfaces/controllers/IUrlController"
import { UrlModel } from "../Models/UrlModel"
import { UserModel } from "../Models/UserModel"
import { BadRequestError, ConflictError, NotFoundError } from "../utils/errors"
import { response } from "../utils/response"

export class UrlController implements IUrlController {
  getUrlById = (async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    if (!id) return next(new BadRequestError('ID is required'))

    const url = await UrlModel.getUrlById({ id })
    if (!url) return next(new NotFoundError("Url not found"))

    return response(res, url)
  })

  createUrl = (async (req: Request, res: Response, next: NextFunction) => {
    const { url, userId } = req.body
    if (!url || !userId) return next(new BadRequestError('URL and UserID are required'))

    const userExist = await UserModel.getUserById({ id: userId })
    if (!userExist) return next(new NotFoundError('User not found'))

    const urlExist = await UserModel.findUserWithUrl({ userId, url })
    if (urlExist) return next(new ConflictError('Url alredy exist'))

    const newUrl = await UrlModel.createUrl({ userId, url })
    return response(res, newUrl)
  })
}