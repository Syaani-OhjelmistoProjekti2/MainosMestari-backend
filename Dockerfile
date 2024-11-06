# Käytä Node.js:n virallista kuvaa
FROM node:20-alpine

# Aseta työskentelyhakemisto
WORKDIR /app

# Kopioi package.json ja package-lock.json
COPY package*.json ./

# Asenna riippuvuudet
RUN npm ci --only=production

# Kopioi kaikki tiedostot työskentelyhakemistoon
COPY . .

# Aseta ympäristömuuttujat
ENV PORT=8080

# Avaa portti
EXPOSE 8080

# Käynnistä sovellus
CMD ["npm", "start"]