import express, { json } from 'express'
import { createUserRouter } from './routes/user'
import { createUrlRouter } from './routes/url'
import { errorHandler } from './middlewares/errorHandler'
import { notFoundHandler } from './middlewares/notFoundHandler'

const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.use(json())
app.use('/user', createUserRouter())
app.use('/url', createUrlRouter())
app.use(errorHandler)
app.use(notFoundHandler)

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`)
})