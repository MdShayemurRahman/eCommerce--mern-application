import express from 'express';
import { dev } from './config/config.js';
import morgan from 'morgan';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import { connectDB } from './config/db.js';

const app = express();

app.use(express.json({ extended: false }));

const port = dev.app.serverPort;

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
  connectDB();
});

app.use(morgan('dev'));

app.use('/api', userRouter);
app.use('/api/auth', authRouter);
