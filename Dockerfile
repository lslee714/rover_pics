FROM node:10

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

ENV PORT=8081
ENV HOST=0.0.0.0

RUN npm run build-prod
RUN npm prune --production
CMD npm start
