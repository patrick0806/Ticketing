import { Router } from "express";

const router = Router();

router.post("/signout", (req, res) => {
  res.send("Hi there!");
});

export { router as signoutRouter };
