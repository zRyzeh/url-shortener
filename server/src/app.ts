import express from 'express'
import { generateIdByUrl } from './utils/generateIdByUrl'

const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.json({ message: "Hello world" })
})

app.get('/genId', (req, res) => {
  const url = req.query.url as string
  const id = generateIdByUrl(url)
  res.json({ Id: id })
})

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`)
})