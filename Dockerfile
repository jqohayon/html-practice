# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine

# Create a shell script to replace PORT in nginx config
RUN echo "#!/bin/sh\n\
sed -i \"s/\\\$PORT/$PORT/g\" /etc/nginx/conf.d/default.conf\n\
nginx -g 'daemon off;'" > /docker-entrypoint.sh && \
chmod +x /docker-entrypoint.sh

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $PORT

ENTRYPOINT ["/docker-entrypoint.sh"] 