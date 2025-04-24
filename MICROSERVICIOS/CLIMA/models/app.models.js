import axios from 'axios';
class AppModels {
    async clima() {
        const response = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=14.6349&longitude=-90.5069&current_weather=true'
        );

        const weather = response.data.current_weather;
        const codigos = {
            0: 'Despejado',
            1: 'Principalmente despejado',
            2: 'Parcialmente nublado',
            3: 'Nublado',
          };
        return{"message": "Exito","codigo": weather.weathercode, "descripcion": codigos[weather.weathercode]}
    }
    
}

export default new AppModels();