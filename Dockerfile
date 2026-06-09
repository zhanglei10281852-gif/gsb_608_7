FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build
RUN npm run build:app
RUN npm run docs:build

FROM nginx:alpine

COPY --from=builder /app/dist-app /usr/share/nginx/html/components
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html/docs
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000 3001

CMD ["nginx", "-g", "daemon off;"]
