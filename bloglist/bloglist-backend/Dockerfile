FROM node:20 AS build

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

FROM build AS test

USER node

CMD ["npm", "run", "test"]

FROM build AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

USER node

CMD ["npm", "run", "start"]