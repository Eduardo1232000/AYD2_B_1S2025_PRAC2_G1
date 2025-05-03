import axios from 'axios';
class AppModels {
    async clima() {
        const response = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=14.6349&longitude=-90.5069&current_weather=true'
        );

        const weather = response.data.current_weather;
        const codigos = {
            0: 'Despejado',
            1: 'Mayormente despejado',
            2: 'Parcialmente nublado',
            3: 'Nublado',
            45: 'Neblina',
            48: 'Neblina con escarcha',
            51: 'Llovizna leve',
            53: 'Llovizna moderada',
            55: 'Llovizna fuerte',
            56: 'Llovizna helada leve',
            57: 'Llovizna helada fuerte',
            61: 'Lluvia leve',
            63: 'Lluvia moderada',
            65: 'Lluvia fuerte',
            66: 'Lluvia helada leve',
            67: 'Lluvia helada fuerte',
            71: 'Nieve leve',
            73: 'Nieve moderada',
            75: 'Nieve fuerte',
            77: 'Granos de nieve',
            80: 'Lluvia intermitente leve',
            81: 'Lluvia intermitente moderada',
            82: 'Lluvia intermitente fuerte',
            85: 'Lluvia con nieve leve',
            86: 'Lluvia con nieve fuerte',
            95: 'Tormenta eléctrica leve o moderada',
            96: 'Tormenta eléctrica con poco granizo',
            99: 'Tormenta eléctrica con granizo fuerte'
        };
        return { "message": "Exito", "codigo": weather.weathercode, "descripcion": codigos[weather.weathercode] }
    }

}

export default new AppModels();