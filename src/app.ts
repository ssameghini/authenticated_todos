import express from 'express';
import 'dotenv/config';

import router from './routes';

const app: express.Application = express();

// For parsing application/json
app.use(express.json());

app.use(router);

app.all('*', (req: any, res: any) => {
  res.status(404).send('Not found');
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;