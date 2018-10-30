FROM node:8 as node

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN npm install

WORKDIR /app
ADD . /app

RUN yarn build

FROM nginx:1.13
COPY --from=node /app/build/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/nginx.conf

EXPOSE 80 443