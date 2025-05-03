import AppModels from '../models/app.models.js';

class AppController {
    async calidad(req, res, next) {
        try {
            const consulta = await AppModels.calidad();

            switch (consulta) {
                case 1:
                    return res.status(400).json({message: "Error: No se pudo obtener la calidad del aire"});
                case 2:
                    return res.status(400).json({message: "Fallo"});
                default:
                    return res.status(200).json(consulta);
            }

        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Error (1): Ha ocurrido un fallo en el sistema"});
        }
    }
}

export default new AppController();