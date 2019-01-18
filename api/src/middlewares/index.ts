import express = require('express')

import { morganMiddlware } from './morgan'

const app = express.Router()

app.use(morganMiddlware)

export const middlewares = app
