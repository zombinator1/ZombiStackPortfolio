# Podłączenie Sanity — demo fotografa

## 1. Konto

Wejdź na https://www.sanity.io → **Start for free** → zaloguj przez GitHub.

## 2. Init projektu

```bash
npx sanity@latest init --env
```

- zaloguje przez przeglądarkę
- **Create new project** → nazwa np. `fotograf-demo`
- dataset: `production`
- zapisze do `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=twoje_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Restart serwera

```bash
npm run dev
```

## 4. Studio

http://localhost:3000/demos/photograph/studio

Kolejność dodawania treści:
1. **Kategorie portfolio** — najpierw to, bo zdjęcia do nich się odwołują
   - slug musi być zgodny z URL: `weddings`, `portraits`, `family`, `business`, `artistic`
2. **Zdjęcia portfolio** — przypisz każde do kategorii

## Jak działa przełącznik Sanity/fallback

`src/sanity/client.ts` → `isSanityConfigured` — sprawdza czy env vars są ustawione.  
Jeśli nie → Unsplash. Jeśli tak → Sanity CDN.
