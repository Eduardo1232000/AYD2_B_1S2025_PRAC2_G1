# Usamos una imagen oficial de Node.js
FROM node:18

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código de la app
COPY . .

# Exponemos el puerto (ajústalo según tu backend)
EXPOSE 3002

# Comando para correr tu app (ajusta si usas otro entrypoint)
CMD ["npm", "start"]
