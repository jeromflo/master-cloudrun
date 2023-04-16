# Usa una imagen de Node.js como base
FROM node:14-slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de dependencias y el archivo de bloqueo de versiones
COPY package.json package-lock.json* ./

# Instala las dependencias
RUN npm install --production

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 8080
EXPOSE 8080

# Arranca la aplicación
CMD [ "npm", "start" ]
