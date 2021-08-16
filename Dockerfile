FROM node:current-alpine3.14
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN yarn global add serve

COPY . .
RUN yarn build
EXPOSE 5000
CMD ["serve", "-s", "build"]
