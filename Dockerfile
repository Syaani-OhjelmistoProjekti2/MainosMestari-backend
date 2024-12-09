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

# Luo hakemisto kuville ja aseta oikeudet
RUN mkdir -p /app/uploads && \
    chown -R 1001:0 /app && \
    chmod -R g+rwX /app

# Aseta ympäristömuuttujat
ENV PORT=8080

# Vaihda käyttäjäksi 1001
USER 1001

# Avaa portti
EXPOSE 8080

# Käynnistä sovellus
CMD ["npm", "start"]