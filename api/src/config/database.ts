import * as knex from 'knex'
import * as path from 'path'
import { env } from './env'

export const database = {
  client: 'postgresql',
  connection: env.databaseUrl,
  migrations: {
    directory: path.resolve('../db/migrations'),
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: path.resolve('../db/seeds'),
  },
} as knex.Config
