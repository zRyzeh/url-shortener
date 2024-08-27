import express, { json } from 'express'
import { createUserRouter } from './routes/user'
import { createUrlRouter } from './routes/url'

const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.use(json())
app.use('/user', createUserRouter())
app.use('/url', createUrlRouter())

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`)
})