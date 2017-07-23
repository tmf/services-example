FROM node:latest

ENV NODE_ENV production
ENV PORT 4000

WORKDIR /api
COPY ./service /api

RUN yarn install

CMD yarn start

EXPOSE 4000
