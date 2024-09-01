import { Router } from "express"
import { UrlController } from "../controllers/UrlController"
import { catchAsync } from "../utils/catchAsync"

export const createUrlRouter = () => {
  const urlRouter = Router()
  const urlController = new UrlController()

  urlRouter.post('/', catchAsync(urlController.createUrl))
  urlRouter.get('/:id', catchAsync(urlController.getUrlById))
  return urlRouter
}