import { Router } from "express";
import clientsRouter from "./clientes.routes.js";
import gamesRouter from "./jogos.routes.js";
import rentsRouter from "./aluguel.routes.js";

const router = Router();

router.use(clientsRouter);
router.use(gamesRouter);
router.use(rentsRouter);

export default router;