FROM node:14 as build-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
ENV NODE_ENV production

COPY . .
RUN yarn build

FROM nginx:1.19

RUN chmod -R 777 /var/log/nginx /var/cache/nginx/ \
    && chmod 644 /etc/nginx/*
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
