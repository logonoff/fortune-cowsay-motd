FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm clean-install
CMD ["node", "index.js"]
EXPOSE 8000
