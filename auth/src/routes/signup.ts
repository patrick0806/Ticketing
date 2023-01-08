import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { DdatabaseConnectionError } from "../errors/databaseConnectionError";
import { RequestValidationError } from "../errors/requestValidationError";

const router = Router();
const validations = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
];

router.post("/signup", validations, (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const { email, password } = req.body;
  console.log("creating a user...");
  throw new DdatabaseConnectionError();

  res.send({ email, password });
});

export { router as signupRouter };
