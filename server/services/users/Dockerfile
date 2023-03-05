FROM node:18-alpine

ENV NODE_ENV=production

ENV PORT=4001

WORKDIR /users

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "npm", "start" ]