import { Router } from "express";
import { getClienteID, getClientes, novoCliente, atualizaCliente } from "../controllers/clientes.controllers.js";
import { validaSchema } from "../middlewares/validacao.middleware.js";
import { clientesSchema } from "../schemas/clientes.schemas.js";


const clientsRouter = Router();

clientsRouter.get('/customers', getClientes);
clientsRouter.get('/customers/:id', getClienteID);
clientsRouter.post('/customers', validaSchema(clientesSchema) , novoCliente);
clientsRouter.put('/customers/:id', validaSchema(clientesSchema), atualizaCliente);

export default clientsRouter;