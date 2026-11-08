#Simple Docker file
#FROM node:20-alpine

#WORKDIR /app

#COPY package.json pnpm-lock.yaml ./
#RUN npm install -g pnpm && pnpm install

#COPY . .
#RUN pnpm build

#EXPOSE 3000
#CMD ["pnpm", "preview", "--host", "0.0.0.0"]

#Multistage Docker

# ===== Stage 1: Build =====
FROM node:20-alpine AS builder

WORKDIR /app

# Install specific pnpm version that works better
RUN npm install -g pnpm@9

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (remove --frozen-lockfile to avoid version conflict)
RUN pnpm install

# Copy source code and build
COPY . .
RUN pnpm build

# ===== Stage 2: Final small image =====
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
