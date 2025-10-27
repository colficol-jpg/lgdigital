FROM node:22-alpine

LABEL "language"="nodejs"
LABEL "framework"="next.js"

WORKDIR /src
RUN apk add --no-cache libc6-compat

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "start"]
