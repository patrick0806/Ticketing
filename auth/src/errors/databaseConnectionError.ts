export class DdatabaseConnectionError extends Error {
  reason = "Error connecting to database";

  constructor() {
    super();

    Object.setPrototypeOf(this, DdatabaseConnectionError.prototype);
  }
}
