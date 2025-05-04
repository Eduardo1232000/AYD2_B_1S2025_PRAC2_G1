# Etapa 1: build de producción
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./

# Pasar variables de entorno como argumentos de build
ARG VITE_API_CALIDAD_URL
ARG VITE_API_CLIMA_URL
ARG VITE_API_TEMPERATURA_URL

ENV VITE_API_CALIDAD_URL=$VITE_API_CALIDAD_URL
ENV VITE_API_CLIMA_URL=$VITE_API_CLIMA_URL
ENV VITE_API_TEMPERATURA_URL=$VITE_API_TEMPERATURA_URL

RUN npm install
COPY . .
RUN npm run build

# Etapa 2: servidor Nginx para servir los archivos estáticos
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
