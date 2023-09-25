import { Router } from "express";
import { getJogos, novoJogo } from "../controllers/jogos.controllers.js";
import { validaSchema } from "../middlewares/validacao.middleware.js";
import { jogosSchema } from "../schemas/jogos.schemas.js";

const gamesRouter = Router();

gamesRouter.get('/games', getJogos);
gamesRouter.post('/games', validaSchema(jogosSchema), novoJogo);

export default gamesRouter;