FROM node:18-bullseye AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --ignore-engines
COPY . .
RUN npm run build

FROM nginx:1.21.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]