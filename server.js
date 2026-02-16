import express from "express";
import dotenv from "dotenv";
import configRouter from "./routes/config.js";

dotenv.config();
const app = express();
app.use(express.json());

// Rutas de Unificados
app.use("/api/unificados/config", configRouter);

// Ruta de salud
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "unificados" });
});

// Mantener analyzer.js si lo necesitas
import "./analyzer.js";

app.listen(process.env.PORT || 4000, () => {
  console.log("🧩 Unificados escuchando");
});
