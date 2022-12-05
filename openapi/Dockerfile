# Load desired node pckg
FROM node:18-bullseye-slim

# Create app directory
WORKDIR /web/app

# Copy app source
COPY . .

# Install node dependencies with clean slate
# Also download tokens
RUN rm -rf node_modules && \
	yarn install --production

# Expose port
EXPOSE 80

# Run app
CMD [ "yarn", "cloud" ]
