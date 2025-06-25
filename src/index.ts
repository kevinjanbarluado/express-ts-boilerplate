import express, { Request, Response } from 'express';
import usersRouter from './routes/users';

const app = express();

app.use("/api/users", usersRouter);

const port = 3001;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
