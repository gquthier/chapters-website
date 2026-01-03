# 🚀 Setup Instructions - Chapters Website

## 📧 Configuration du Formulaire de Support

Le formulaire de support utilise **Web3Forms** (service gratuit, sans backend nécessaire).

### Étape 1 : Obtenir votre clé API Web3Forms (GRATUIT)

1. Aller sur [web3forms.com](https://web3forms.com)
2. Cliquer sur "Get Started Free"
3. Entrer votre email (où vous recevrez les demandes de support)
4. Copier votre **Access Key**

### Étape 2 : Configurer la clé dans le code

Ouvrir `app/support/page.tsx` et remplacer ligne 68 :

```tsx
// AVANT (ligne 68)
access_key: "YOUR_WEB3FORMS_ACCESS_KEY",

// APRÈS
access_key: "votre-vraie-clé-ici",
```

### Alternative : Variables d'environnement (Recommandé)

**1. Créer `.env.local` à la racine :**

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=votre-clé-ici
```

**2. Modifier `app/support/page.tsx` ligne 68 :**

```tsx
access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
```

**3. Ajouter dans Vercel :**
- Project Settings → Environment Variables
- Ajouter `NEXT_PUBLIC_WEB3FORMS_KEY` avec votre clé

---

## 🌐 Déploiement sur Vercel

### Option 1 : Via GitHub (Recommandé)

```bash
# 1. Initialiser Git
git init
git add .
git commit -m "Initial commit - Chapters website"

# 2. Créer un repo sur GitHub
# Via l'interface web : github.com/new
# Nommer le repo : chapters-website

# 3. Pousser le code
git remote add origin https://github.com/VOTRE_USERNAME/chapters-website.git
git branch -M main
git push -u origin main

# 4. Déployer sur Vercel
# - Aller sur vercel.com
# - Se connecter avec GitHub
# - Importer le repo chapters-website
# - Cliquer "Deploy"
```

### Option 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

---

## 📝 URLs à mettre dans App Store Connect

Une fois déployé sur Vercel, vous aurez une URL comme :
```
https://chapters-website.vercel.app
```

Ou avec domaine custom :
```
https://getchapters.app
```

### Configurer dans App Store Connect :

```
Marketing URL: https://getchapters.app
Privacy Policy URL: https://getchapters.app/privacy
Support URL: https://getchapters.app/support
```

---

## 🎨 Personnalisations Optionnelles

### 1. Modifier l'URL App Store

Fichier : `components/CTA.tsx` (ligne 45)

```tsx
// AVANT
href="https://apps.apple.com/fr/app/chapters-build-yours/id6755590774"

// APRÈS (quand vous aurez votre URL App Store)
href="https://apps.apple.com/fr/app/chapters-build-yours/id6755590774"
```

### 2. Ajouter Google Analytics

Fichier : `app/layout.tsx`

Ajouter avant `</body>` :

```tsx
import Script from 'next/script'

// Dans le return, avant </body>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Ajouter vos screenshots

1. Prendre des screenshots de l'app
2. Les ajouter dans `public/screenshots/`
3. Modifier `components/Hero.tsx` pour afficher :

```tsx
// Remplacer le placeholder (ligne 41-43) par :
<Image
  src="/screenshots/app-preview.png"
  alt="Chapters App"
  width={1200}
  height={800}
  className="rounded-2xl shadow-2xl"
/>
```

---

## 🔧 Commandes Utiles

```bash
# Installer les dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Vérifier les erreurs
npm run lint
```

---

## 📧 Emails à configurer

Créer ces adresses email (Gmail, Outlook, ou autre) :

- `support@getchapters.app` → Reçoit les demandes via le formulaire
- `privacy@getchapters.app` → Contact pour questions privacy
- `legal@getchapters.app` → Contact pour questions légales

**Important** : L'email configuré dans Web3Forms recevra tous les messages du formulaire.

---

## 🐛 Troubleshooting

### Formulaire ne fonctionne pas ?

1. Vérifier que la clé Web3Forms est correcte
2. Vérifier la console browser (F12) pour les erreurs
3. Tester avec `curl` :

```bash
curl -X POST https://api.web3forms.com/submit \
  -H "Content-Type: application/json" \
  -d '{"access_key":"VOTRE_CLE","message":"test"}'
```

### Build Vercel échoue ?

1. Vérifier `package.json` (dépendances à jour)
2. Vérifier `.env` variables dans Vercel
3. Regarder les logs de build dans Vercel

---

## ✅ Checklist Avant Go-Live

- [ ] Web3Forms configuré et testé
- [ ] Screenshots ajoutés
- [ ] URL App Store mise à jour
- [ ] Google Analytics ajouté (optionnel)
- [ ] Domaine custom configuré (optionnel)
- [ ] Emails support/privacy/legal créés
- [ ] Test complet du site sur mobile
- [ ] URLs mises dans App Store Connect

---

**Besoin d'aide ?** Consultez la [documentation Next.js](https://nextjs.org/docs) ou [Vercel docs](https://vercel.com/docs).
