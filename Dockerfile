FROM node:10

WORKDIR /app

COPY package*.json /app/

RUN npm install --only=production

COPY . /app

CMD node app/server.js

EXPOSE 8081