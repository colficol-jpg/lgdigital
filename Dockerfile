FROM node:22-alpine

LABEL "language"="nodejs"
LABEL "framework"="next.js"

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080
ENV PORT=8080

CMD ["node", ".next/standalone/server.js"]
