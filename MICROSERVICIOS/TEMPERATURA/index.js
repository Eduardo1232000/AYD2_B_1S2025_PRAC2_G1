import app from './app.js';
const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor API en http://0.0.0.0:${PORT}`);
});