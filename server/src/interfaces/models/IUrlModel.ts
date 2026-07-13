import type { Url } from "../../generated/prisma/client.js";

export interface IUrlModel {
  createUrl: (params: { userId: string, url: string }) => Promise<Url | null>
  getUrlById: (params: { id: string }) => Promise<Url | null>
}