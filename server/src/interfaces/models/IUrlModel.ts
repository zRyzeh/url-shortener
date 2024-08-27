import { Url } from "@prisma/client";

export interface IUrlModel {
  createUrl: (params: { userId: string, url: string }) => Promise<Url | null>
  getUrlById: (params: { id: string }) => Promise<Url | null>
}