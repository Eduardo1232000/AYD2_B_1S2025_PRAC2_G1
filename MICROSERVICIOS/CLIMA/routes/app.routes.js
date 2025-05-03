import { Router } from 'express';
import AppController from '../controllers/app.controller.js';

const routerApp = Router();

routerApp.get("/auth_check", async (req, res) => {
    res.status(200).json({ "status": 200, "message": "API Funcionando correctamente" });
});

routerApp.get("/clima", AppController.clima);

export default routerApp;