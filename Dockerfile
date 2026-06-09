# --- builder stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Better caching: copy manifests first
COPY package.json ./
RUN npm install --no-audit --no-fund

# Copy the rest of the source
COPY . .

# Build component preview app + docs site (preview app is in dist-app/)
RUN npm run build && npm run docs:build

# --- preview runtime (component playground) ---
FROM nginx:alpine AS preview
COPY --from=builder /app/dist-app /usr/share/nginx/html
COPY docker/nginx-preview.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

# --- docs runtime (VitePress static site) ---
FROM nginx:alpine AS docs
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
COPY docker/nginx-docs.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
