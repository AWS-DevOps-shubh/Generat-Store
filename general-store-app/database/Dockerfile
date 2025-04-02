FROM mongo:latest

# Set up initial data population
COPY mongo-init.js /docker-entrypoint-initdb.d/

# Expose MongoDB port
EXPOSE 27017
