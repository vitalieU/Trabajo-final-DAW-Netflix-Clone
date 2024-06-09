FROM oven/bun:1.1.10-alpine as builder
WORKDIR /app

COPY ./package.json  ./
RUN bun install
COPY . .
CMD [ "bun", "run", "build" ]

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
