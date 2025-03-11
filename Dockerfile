FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN apk update && apk add --no-cache libc6-compat gcompat

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
