FROM node:22

# Configurar directorio de trabajo
WORKDIR /app

# Instalar dependencias del proyecto
COPY package*.json ./
RUN npm install
# Copiar el código fuente
COPY . .
# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]