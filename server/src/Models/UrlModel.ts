import { prisma } from "../lib/prisma"
import { generateIdByUrl } from "../utils/generateIdByUrl"
import { IUrlModel } from "../interfaces/models/IUrlModel"

export const UrlModel: IUrlModel = class {
  static createUrl = (async ({ userId, url }: { userId: string, url: string }) => {
    const urlCreated = await prisma.url.create({
      data: {
        id: generateIdByUrl(url),
        url,
        userId
      }
    })
    return urlCreated
  })

  static getUrlById = (async ({ id }: { id: string }) => {
    const url = await prisma.url.findUnique({
      where: {
        id
      }
    })
    return url
  })
}
