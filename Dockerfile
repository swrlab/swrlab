FROM node:8

# Create app directory
WORKDIR /web/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# run container
EXPOSE 80
CMD [ "npm", "run", "cloud" ]
