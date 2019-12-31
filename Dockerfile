FROM node:10

WORKDIR /app

COPY package*.json /app/

RUN npm install --only=production

COPY . /app

ENV PORT=8081
ENV HOST=0.0.0.0

CMD npm start
