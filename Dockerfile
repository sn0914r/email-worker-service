FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# DEVELOPMENT STAGE
FROM base AS development
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]

# BUILDER AND PRODUCTION STAGE
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

FROM base AS production
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/server.js"]
