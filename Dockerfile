# Usa una imagen Node.js ligera
FROM node:22-alpine

# Etiquetas informativas
LABEL "language"="nodejs"
LABEL "framework"="next.js"

# Directorio de trabajo
WORKDIR /src

# Instalar dependencias del sistema necesarias para Next.js
RUN apk add --no-cache libc6-compat

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN npm install

# Construir proyecto
RUN npm run build

# Exponer el puerto que usará Next.js (y Zeabur)
EXPOSE 8080

# Iniciar la app
CMD ["npm", "run", "start"]

