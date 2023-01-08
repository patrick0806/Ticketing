import { Request, Response, NextFunction } from "express";
import { DdatabaseConnectionError } from "../errors/databaseConnectionError";
import { RequestValidationError } from "../errors/requestValidationError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("handling this error as a request validation error");
  }

  if (err instanceof DdatabaseConnectionError) {
    console.log("handling this db connection error");
  }

  res.status(400).send({
    message: err.message,
  });
};
