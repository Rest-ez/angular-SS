FROM node:latest AS builder
ENV APP=/var/www

#RUN apt-get update # && app-get install -y curl

# Create app directory
RUN mkdir -p $APP
WORKDIR $APP

# Install app dependencies
COPY package.json $APP
COPY package-lock.json $APP

RUN npm install
#RUN npm rebuild node-sass

# Bundle app source in this experiment the dist should be build
# already  as well as all node modules
COPY . $APP
RUN npm run ng build --prod

FROM nginx:latest
RUN apt-get update && apt-get install -y nginx

COPY proxy.conf /etc/nginx/conf.d/default.conf
ENV APP1=/var/www
WORKDIR /usr/share/nginx/html


# now there is a folder in dist for angular 6
COPY --from=builder $APP1/dist/angular-ss .

EXPOSE 80 443 8080
CMD ["nginx", "-g", "daemon off;"]



# docker build -t angular-ss -f Dockerfile  .
# docker run -p 3000:80 -d --name angular-ss angular-ss

# to inspect
# docker run -it -p 3000:80  angular-ss /bin/bash

#for openshift

# you'll need to whitelist `dtr.microcaas.net` as an insecure registry on your laptop.
#docker login -u admin -p ASKFORPASSWORD dtr.microcaas.net
#docker build . -t dtr.microcaas.net/bahcloudplatforms/gmm-prototype-ui:dev
#docker push dtr.microcaas.net/bahcloudplatforms/gmm-prototype-ui:dev
