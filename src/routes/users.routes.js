import { Router } from 'express';
import passport from 'passport';

//Obtengo las funciones del controlador
import { getAllUsers } from '../controllers/users.controller.js';

const router = Router();

//Defino nombres de las rutas,
router.get('/getAllUsers', getAllUsers);

export default router;
