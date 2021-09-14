FROM node:12-alpine

WORKDIR /front

COPY citizenlab.config.json citizenlab.config.*.json /

ADD front/package.json front/package-lock.json ./
ADD front/internals internals

# RUN npm install

ADD front/. .

# RUN npm run build

EXPOSE 3000

CMD ["npm", "run start:production"]
