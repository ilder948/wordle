import {Router} from 'express'
import { receiveWord } from './controller'
const router = Router()

router.post('/word', receiveWord )



export default router

