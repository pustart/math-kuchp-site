# Stage 1: install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json .
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
RUN npm pkg delete scripts.prepare && npm install --force

# Stage 2: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY public ./public
COPY package.json next.config.js ./
RUN npm run build

# Stage 3: run
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
CMD ["npm", "run", "start"]
