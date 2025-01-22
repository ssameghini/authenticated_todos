import express from 'express';

const app: any = express();

app.get("/test", (req: any, res: any) => {
  res.send('This awesome project works!');
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:128`);
});

export default app;