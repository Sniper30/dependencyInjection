FROM node:18-alpine

WORKDIR /app


COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
RUN npm install -g ts-node
COPY . .

CMD [ "npm", "run", "start" ]