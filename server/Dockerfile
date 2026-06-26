FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose server port
EXPOSE 5000

# Set environment
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
