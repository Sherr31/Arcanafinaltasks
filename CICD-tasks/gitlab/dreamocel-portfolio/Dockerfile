# ---------- Build stage ----------
FROM node:18-alpine3.18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-retries 5 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm config set fetch-timeout 600000

RUN npm ci

COPY . .

RUN npm run build


# ---------- Production stage ----------
FROM node:18-alpine3.18 AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Only needed if your project has a public directory
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
