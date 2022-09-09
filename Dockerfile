FROM node:16.13.1

EXPOSE 8080

WORKDIR /var/www/front

RUN apt-get update
RUN apt-get install -y git yarn rsync
RUN apt-get install -y mc curl