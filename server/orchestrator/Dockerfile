FROM node:18-alpine

# ENV NODE_ENV=production

ENV REDIS_PASSWORD="Dp7OHiuXBYmB9DWKvumTR4wqxxgKexvp"

WORKDIR /orchestrator

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

# RUN npm run reset-db-production

COPY . .

CMD [ "npm", "start" ]