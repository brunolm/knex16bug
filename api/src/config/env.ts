import * as dotenv from 'dotenv'
import * as toCamel from 'lodash.camelcase'
import { caseKeys } from 'object-casing'

dotenv.config()

interface Environment {
  nodeEnv: string
  virtualHost: string
  virtualPort: string
  host: string
  port: number
  isProduction: boolean
  isTest: boolean
  isDevelopment: boolean
}

export const env = {
  ...caseKeys(process.env, toCamel),
  port: +process.env.PORT,
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
} as Environment & { [key: string]: any }
