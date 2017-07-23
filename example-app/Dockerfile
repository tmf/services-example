FROM node:latest

ENV NODE_ENV production
ENV PORT 3000

ARG BUILD_ENV

WORKDIR /example-app
COPY . /example-app

RUN yarn install

RUN if [ "$BUILD_ENV" = "production" ]; then yarn run build; fi

CMD yarn start

EXPOSE 3000
