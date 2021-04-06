FROM node:15.13.0-alpine
RUN mkdir /home/node/app && chown node:node /home/node/app
USER node
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY --chown=node:node package.json package-lock.json ./
RUN npm install
COPY --chown=node:node . ./
CMD [ "npm", "start" ]
