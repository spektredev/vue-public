FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
ENV NUXT_HOST=192.168.0.22
ENV NUXT_PORT=3000
CMD ["npm", "run", "start"]