FROM node:alpine

WORkDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm","start"]