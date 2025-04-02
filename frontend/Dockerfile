# Step 1: Build the frontend application
FROM node:18 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./

RUN ls -la public

RUN npm run build

# Step 2: Serve the app using a simple server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
