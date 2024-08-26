import crypto from 'crypto'
import { numberToBase62 } from './numberToBase62';

export const generateIdByUrl = (url: string) => {
  const randomString = crypto.randomBytes(16).toString('hex')
  const dataToHash = `${url}-${randomString}`
  const hash = crypto.createHash('sha256').update(dataToHash).digest('hex')
  const num = parseInt(hash, 16)

  return numberToBase62(num).slice(0, 8)
}
