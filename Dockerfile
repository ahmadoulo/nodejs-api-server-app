FROM node:18

MAINTAINER ahmadoulo@ahmadoulo.com

WORKDIR /app

COPY package*.json ./

COPY ./public /app/public

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
