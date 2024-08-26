const base62Chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const numberToBase62 = (num: number) => {
  let base62 = ""
  while (num > 0) {
    base62 = base62Chars[num % 62] + base62
    num = Math.floor(num / 62)
  }
  return base62
}