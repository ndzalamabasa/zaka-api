import express from 'express';
import cors from 'cors';

import budgetRoutes from './src/routes/budget-routes.js';

const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/budgets', budgetRoutes);

app.get('/api', (req, res) => {
  res.status(200);
  res.json({ message: 'node working' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
