# --- Builder stage ---
FROM node:18-alpine AS builder
WORKDIR /app

# Paketleri yükle (devDependencies dahil)
COPY package*.json ./
RUN npm install --silent

# Tüm kodu kopyala ve build al
COPY . .
RUN npm run build

# --- Runner stage ---
FROM node:18-alpine
WORKDIR /app

# Sadece prod bağımlılıkları yükle
COPY package*.json ./
RUN npm install --production --silent

# Build çıktısını ve gerekli dosyaları kopyala
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Public klasörün varsa ekle, yoksa gerek yok
# COPY --from=builder /app/public ./public

EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
