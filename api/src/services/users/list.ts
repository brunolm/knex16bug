import { db } from '../db'
import { tables } from '../db/schema'

export const list = async () => {
  return await db(tables.users)
}
