import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Auth from './routes/app.routes.js';

// SETTINGS
const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Rutas con estructura MVC
app.use(Auth);

export default app;