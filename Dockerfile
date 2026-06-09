FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

FROM base AS preview
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM base AS docs
EXPOSE 3001
CMD ["npm", "run", "docs:dev", "--", "--host", "0.0.0.0"]
