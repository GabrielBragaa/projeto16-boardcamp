import { Router } from "express";
import { getGames, newGame } from "../controllers/jogos.controllers.js";
import { validaSchema } from "../middlewares/validacao.middleware.js";
import { jogosSchema } from "../schemas/jogos.schemas.js";

const gamesRouter = Router();

gamesRouter.get('/games', getGames);
gamesRouter.post('/games', validaSchema(jogosSchema), newGame);

export default gamesRouter;