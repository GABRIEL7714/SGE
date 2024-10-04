import { Router } from 'express';

//Obtengo las funciones del controlador
import { registerToEvent } from '../controllers/inscriptions.controller.js';

const router = Router();

//Defino nombres de las rutas,
router.put('/registerToEvent/:userId/:eventId', registerToEvent);

export default router;
