FROM nginx:alpine

LABEL maintainer = "PrinzJuliano <julian@prinzjuliano.com>"

RUN apk add --no-cache bash coreutils

COPY www /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/bashrc /root/.bashrc

EXPOSE 80

WORKDIR /usr/share/nginx/html
