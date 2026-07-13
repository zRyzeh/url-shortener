FROM node:22-alpine
WORKDIR /app

RUN npm install -g tsx
COPY package*.json ./
RUN npm ci

COPY prisma.config.ts prisma/ ./
RUN npx prisma generate

EXPOSE 3000
CMD ["sh", "-c", "npx prisma generate && tsx watch src/app.ts"]
