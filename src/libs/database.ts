import { DataSource } from 'typeorm'
import { GeneratedWords } from '../entities/GeneratedWords'
import { Attempts } from '../entities/Attempts'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'containers-us-west-74.railway.app',
  port: 6412,
  username: 'postgres',
  password: 'IQPOP31AcMGEU6cfN5PC',
  database: 'railway',
  entities: [GeneratedWords, Attempts],
  synchronize: true,
  logging: false
})