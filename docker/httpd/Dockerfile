# Usar Node.js 20 en una imagen ligera
FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias y hacer la instalación
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copiar el código fuente
COPY . .

# Exponer el puerto de Vite (normalmente 5173)
EXPOSE 5173

# Comando por defecto: iniciar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host"]