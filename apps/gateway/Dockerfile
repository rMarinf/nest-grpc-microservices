# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 8 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
#
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM node:12-alpine as builder

ENV NODE_ENV build

#USER node
WORKDIR /home/app

COPY . /home/app

RUN npm install \
    && npm run build

# ---

FROM node:12-alpine

ENV NODE_ENV production

#USER node
WORKDIR /home/app

COPY --from=builder /home/app/package*.json /home/app/
COPY --from=builder /home/app/dist/gateway /home/app/dist/gateway

RUN npm install

CMD ["npm","run", "start:gateway:prod"]
