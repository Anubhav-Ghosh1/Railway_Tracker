import { Router } from "express";

const router = Router();

router.get("/", (req, resp) => {
  resp.json({
    success: true,
    time_stamp: Date.now();
  });
});

export default router;
