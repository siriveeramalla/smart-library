# Use Node.js official image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port (change if needed)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
