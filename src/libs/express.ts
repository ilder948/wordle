import express from 'express';
import { routes } from '../network/router';
const app = express();

app.use(express.json());
routes(app)


export default app