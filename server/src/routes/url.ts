import { Router } from "express"
import { UrlController } from "../controllers/UrlController"

export const createUrlRouter = () => {
  const urlRouter = Router()
  const urlController = new UrlController()

  urlRouter.post('/', urlController.createUrl)
  urlRouter.get('/:id', urlController.getUrlById)
  return urlRouter
}