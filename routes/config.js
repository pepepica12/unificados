import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const result = await db().query("SELECT clave, valor FROM unificados_config");
    res.json({ ok: true, config: result.rows });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;
