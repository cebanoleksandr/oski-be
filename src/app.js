import express from "express";
import cors from "cors";
import { router as testsRouter } from "./routes/tests.route.js";
import { router as usersRouter } from "./routes/users.route.js";
import { router as loginRouter } from "./routes/login.route.js";
import { router as addResultRouter } from "./routes/add-result.route.js";
import { router as initRouter } from "./routes/init.route.js";

const PORT = 3005;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/tests', testsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/add-result', addResultRouter);
app.use('/init', initRouter);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
