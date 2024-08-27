import { Request, Response } from "express"
import { IUrlController } from "../interfaces/controllers/IUrlController"
import { UrlModel } from "../Models/UrlModel"
import { UserModel } from "../Models/UserModel"

export class UrlController implements IUrlController {
  getUrlById = (async (req: Request, res: Response) => {
    const { id } = req.params

    const url = await UrlModel.getUrlById({ id })
    if (!url) return res.status(404).send({ error: 'Url dont exist' })

    return res.json(url)
  })

  createUrl = (async (req: Request, res: Response) => {
    const { url, userId } = req.body

    const userExist = await UserModel.getUserById({ id: userId })
    if (!userExist) return res.status(400).send({ error: 'User dont exist' })
    if (!url || !userId) return res.sendStatus(403)

    const urlExist = await UserModel.findUserWithUrl({ userId, url })
    if (urlExist) return res.status(400).send({ error: 'Url alredy exist' })

    const newUrl = await UrlModel.createUrl({ userId, url })
    return res.send(newUrl)
  })
}