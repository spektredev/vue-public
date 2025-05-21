FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3005
ENV HOST=192.168.0.22
ENV PORT=3005
CMD ["npm", "run", "start"]