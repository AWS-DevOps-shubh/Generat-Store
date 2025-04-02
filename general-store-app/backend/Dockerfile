# Step 1: Build the backend application
FROM node:18
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy the application code
COPY . .

# Start the app
CMD ["node", "index.js"]

# Expose the port
EXPOSE 5000
