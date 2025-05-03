import axios from 'axios';

class AppModels {
    async temperatura() {
        const response = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=14.6349&longitude=-90.5069&hourly=apparent_temperature&timezone=auto'
        );

        const tiempo = new Date().toISOString().slice(0, 13); //HORA
        const horas = response.data.hourly.time;
        const temperaturas = response.data.hourly.apparent_temperature;
        const indice = horas.findIndex(h => h.startsWith(tiempo));

        return {
            message: "Éxito",
            temperatura_aparente: temperaturas[indice]
        };
    }
}

export default new AppModels();
