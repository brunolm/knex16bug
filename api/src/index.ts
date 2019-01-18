import * as bodyParser from 'body-parser'
import * as express from 'express'

import { apiRoutes } from './api'
import { env } from './config'
import { middlewares } from './middlewares'
import { logger } from './services/logger'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(middlewares)
app.use('/api', apiRoutes)

app.use('/', (_, res) => res.send({ ok: true }))

app.listen(env.port, env.host, () => {
  logger.info(`Started at http://${process.env.VIRTUAL_HOST}/ (${env.host}:${env.port})`)
})
