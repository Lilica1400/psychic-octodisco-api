import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

<<<<<<< HEAD
const PORT = process.env.APP_PORT || 3000;
=======
const port = process.env.APP_PORT || 3000;
>>>>>>> 25b6384f08eb6879ecb505e698aa4fc1fae19a2b
const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
<<<<<<< HEAD
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
=======
  res.send(`<h1>Hello from the TypeScript world!</h1>${req.params.id}.`);
});

app.listen(port, () => console.log(`Running on ${port} ⚡`));
>>>>>>> 25b6384f08eb6879ecb505e698aa4fc1fae19a2b
