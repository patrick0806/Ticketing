import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { currentUserRouter } from "./routes/currentUser";
import { signinRoute } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
const baseUrl = "/api/users";
app.use(express.json());

app.use(baseUrl, currentUserRouter);
app.use(baseUrl, signinRoute);
app.use(baseUrl, signoutRouter);
app.use(baseUrl, signupRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
