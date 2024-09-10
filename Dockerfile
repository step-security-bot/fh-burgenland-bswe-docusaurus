# builder image
FROM node:18 as builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# final image
FROM nginx:alpine

COPY --from=builder /app/build/ /usr/share/nginx/html/
