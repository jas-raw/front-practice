FROM node:16
WORKDIR /home/node/app
COPY ./ /home/node/app
RUN yarn install
ENTRYPOINT ["yarn", "start"]
