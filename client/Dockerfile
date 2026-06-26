# Stage 1: Build React Client
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Build the production files (expects VITE_API_URL if needed, but defaults to relative paths proxied by Nginx)
RUN npm run build

# Stage 2: Serve Client with Nginx
FROM nginx:alpine

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
