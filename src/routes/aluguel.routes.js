import { Router } from "express";
import { deleteAluguel, fimAluguel, getAluguel, novoAluguel } from "../controllers/aluguel.controllers.js";
import { validaSchema } from "../middlewares/validacao.middleware.js";
import { aluguelSchema } from "../schemas/aluguel.schemas.js";

const rentsRouter = Router();

rentsRouter.get('/rentals', getAluguel);
rentsRouter.post('/rentals', validaSchema(aluguelSchema) , novoAluguel);
rentsRouter.post('/rentals/:id/return', fimAluguel);
rentsRouter.delete('/rentals/:id', deleteAluguel);

export default rentsRouter;