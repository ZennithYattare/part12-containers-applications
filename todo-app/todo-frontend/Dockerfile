FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# New stage for running tests
FROM build-stage AS test-stage
RUN CI=true npm test

# Build the application
FROM test-stage AS build
RUN npm run build

# This is a new stage, everything before this is gone, except for the files that we want to COPY
FROM nginx:1.25-alpine

# COPY the directory dist from the build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]