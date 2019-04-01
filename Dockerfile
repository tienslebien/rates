# Client App
FROM node:11-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build

# Final image
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
