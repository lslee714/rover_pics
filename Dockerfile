FROM node:10

WORKDIR /app

ENV PORT 8081
ENV HOST 0.0.0.0

COPY package*.json /app/

RUN npm install --only=production

COPY . /app

CMD node app/server.js
