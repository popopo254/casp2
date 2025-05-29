# Build stage
FROM node:18 AS build-stage

WORKDIR /app

# Copy only the frontend folder
COPY front/package.json ./front/

# Install dependencies inside front/
WORKDIR /app/front
RUN npm install

# Copy frontend source code
COPY front/ ./  
# this puts contents of front/ into /app/front

# Build the Vue.js application
RUN npm run build

# Production stage
FROM nginx:latest

# Copy the built files from the build stage
COPY --from=build-stage /app/front/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
