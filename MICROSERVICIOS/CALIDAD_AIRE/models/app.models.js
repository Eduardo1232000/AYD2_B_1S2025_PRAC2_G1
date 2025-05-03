import axios from 'axios';

class AppModels {
    async calidad() {
        const response = await axios.get('https://air-quality-api.open-meteo.com/v1/air-quality', {
            params: {
                latitude: 14.6349,
                longitude: -90.5069,
                hourly: 'pm2_5,us_aqi'
            }
        });

        const hourly = response.data.hourly;

        if (!hourly || !hourly.us_aqi || !hourly.pm2_5) {
            return 1
        }

        const lastIndex = hourly.time.length - 1;
        const us_aqi = hourly.us_aqi[lastIndex];
        const pm2_5 = hourly.pm2_5[lastIndex];

        return {
            message: "Éxito",
            aqi: us_aqi,
            pm2_5: pm2_5
        };
    }
}

export default new AppModels();
