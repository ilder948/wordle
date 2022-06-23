import cron from 'node-cron'
import {selectWord} from './components/wordle/controller'
import { AppDataSource } from './libs/database'
import app from './libs/express'
const PORT = 3000;


async function main() {
  try {
    await AppDataSource.initialize()
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });    
  } catch (error) {
    console.log(error)
  }

  cron.schedule('*/1 * * * *', () => {
    console.log('Generando Palabra')
    selectWord()
  })
  
}

main()