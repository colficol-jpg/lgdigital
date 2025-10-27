FROM node:18-slim
LABEL "language"="nodejs"
LABEL "framework"="next.js"

WORKDIR /src

COPY . .

RUN npm install && npm run build

EXPOSE 8080

CMD ["npm", "start"]
