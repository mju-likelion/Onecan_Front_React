FROM node:current-alpine3.14
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
