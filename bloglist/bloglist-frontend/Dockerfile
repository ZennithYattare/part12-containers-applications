FROM node:20 AS setup

WORKDIR /usr/src/app

COPY . .

RUN npm ci

FROM setup AS build 

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]