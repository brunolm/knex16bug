import * as morgan from 'morgan'

import { env } from '../config'

let logStart = `[:date[iso]] :method :url (from: :remote-addr)\nHeaders:\n:header \nQuery:\n:query \nBody:\n:body`
const logEnd = `[:date[iso]] :status in :response-time ms`

if (env.nodeEnv === 'production') {
  logStart = `[:date[iso]] :method :url (from: :remote-addr) Headers: :header Query: :query Body: :body`
}

const toJson = (value) => {
  if (env.isDevelopment) {
    return JSON.stringify(value, null, 2)
  }

  return JSON.stringify(value)
}

morgan.token('header', (req) => toJson(req.headers))
morgan.token('query', (req) => toJson(req.query))
morgan.token('body', (req) => toJson(req.body))

export const morganMiddlware = [morgan(logStart, { immediate: true }), morgan(logEnd, {})]
