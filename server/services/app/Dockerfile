FROM node:18-alpine

ENV NODE_ENV=production

ENV DATABASE_URL=postgresql://postgres:WPkGAqppZdv3RL4v@db.trqvuhvqxllkdrvgqpio.supabase.co:5432/postgres

ENV PORT=4002

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

# RUN npm run reset-db-production

COPY . .

CMD [ "npm", "start" ]