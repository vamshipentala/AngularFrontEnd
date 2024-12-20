# Stage 1: Build the Angular app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project to the working directory
COPY . .

# Build the Angular application for production
RUN npm run build -- --output-path=dist

# Stage 2: Serve the Angular app using Nginx
FROM nginx:latest as serve

# Copy the built Angular app to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration if needed (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
