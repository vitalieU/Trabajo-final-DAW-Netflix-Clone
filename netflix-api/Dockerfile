FROM oven/bun:1.1.10-alpine as base
WORKDIR /app

COPY ./package.json  ./
RUN bun install
COPY . .
CMD [ "bun", "run", "start-dev" ]
