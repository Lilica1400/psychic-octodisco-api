import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3000;
const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));