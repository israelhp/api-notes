# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
