# MainosMestari Backend

Backend-palvelin MainosMestari-sovellukselle.

## Kehitysympäristö

### Vaatimukset

- Node.js
- Docker
- OpenAI API key
- Stability AI API key

### Asennus

1. Kloonaa repositorio
2. Asenna riippuvuudet:

```bash
npm install
```

3. Kopioi `.env.example` tiedosto nimellä `.env` ja lisää tarvittavat API avaimet:

```env
PORT=8080
OPENAI_API_KEY="your_openai_api_key_here"
STABILITY_KEY_API="your_stability_api_key_here"
```

### Kehityspalvelimen käynnistys

```bash
npm run dev
```

## Rahti CSC Deployment

### Uuden version julkaisu Rahti-ympäristöön

1. Rakenna uusi Docker image:

```bash
docker build --no-cache -t mainosmestari .
```

2. Kirjaudu Rahti-ympäristöön selaimen kautta ja kopioi token "Log in with this token" -kohdasta.

3. Tee tarvittavat Docker-komennot:

```bash
# Tägää image Rahti rekisteriä varten
docker tag mainosmestari image-registry.apps.2.rahti.csc.fi/alyakokeilut/mainos-mestari-opiskelijat:latest

# Kirjaudu Rahti rekisteriin
docker login -u g -p $(oc whoami -t) image-registry.apps.2.rahti.csc.fi

# Työnnä image Rahti rekisteriin
docker push image-registry.apps.2.rahti.csc.fi/alyakokeilut/mainos-mestari-opiskelijat:latest
```

4. Tarkista imagestream (valinnainen):

```bash
oc get imagestream mainosmestari
```

## Lisätietoja

Tarkemmat ohjeet ja dokumentaatio löytyy [Rahti dokumentaatiosta](https://docs.csc.fi/cloud/rahti2/).

## Lisenssi

License - katso [LICENSE](LICENSE) tiedosto lisätietoja varten.
