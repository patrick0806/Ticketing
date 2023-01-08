import { Router } from "express";

const router = Router();

router.get("/current-user", (req, res) => {
  res.send("Hi there!");
});

export { router as currentUserRouter };
