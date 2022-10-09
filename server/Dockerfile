FROM node:latest

WORKDIR /var/www/ninja

COPY . .

RUN npm install -g nodemon

RUN npm ci

EXPOSE 80

CMD ["npm", "start"]