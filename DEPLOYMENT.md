# 🚀 Guide de Déploiement Vercel

## Étape 1: Déployer sur Vercel

### Option A: Via le Dashboard Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Cliquez sur "Add New Project"
3. Importez le repo GitHub: `gquthier/chapters-website`
4. Vercel détecte automatiquement Next.js
5. Cliquez sur "Deploy"

**C'est tout!** Vercel va:
- Installer les dépendances
- Build l'application
- Déployer sur un domaine `.vercel.app`

### Option B: Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

## Étape 2: Configuration Web3Forms (Contact Form)

1. Allez sur [web3forms.com](https://web3forms.com)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez votre Access Key

### Ajouter la clé dans Vercel:

1. Dans le dashboard Vercel, allez dans votre projet
2. Aller dans **Settings** → **Environment Variables**
3. Ajoutez:
   - **Key**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: Votre clé Web3Forms
   - **Environment**: Production, Preview, Development
4. Cliquez "Save"
5. Redéployez le site

**OU** modifiez directement `app/support/page.tsx` ligne 63:
```tsx
access_key: "votre_vraie_clé_ici",
```

## Étape 3: Domaine Personnalisé

### Ajouter un domaine custom:

1. Dans Vercel, allez dans **Settings** → **Domains**
2. Ajoutez votre domaine (ex: `captureyourchapters.com`)
3. Suivez les instructions pour configurer vos DNS

### Configuration DNS recommandée:

**Pour domaine principal** (`captureyourchapters.com`):
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**Pour www** (`www.captureyourchapters.com`):
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

## Étape 4: URLs pour App Store Connect

Une fois déployé, utilisez ces URLs dans App Store Connect:

- **Marketing URL**: `https://captureyourchapters.com`
- **Privacy Policy URL**: `https://captureyourchapters.com/privacy`
- **Support URL**: `https://captureyourchapters.com/support`

## Étape 5: Vérification Post-Déploiement

### Checklist:

- [ ] Site accessible sur l'URL Vercel
- [ ] Toutes les pages chargent correctement (/, /support, /privacy, /terms)
- [ ] Webcam feature fonctionne (demande permission)
- [ ] Scroll navigation fonctionne (5 sections)
- [ ] Formulaire de contact fonctionne (avec clé Web3Forms)
- [ ] Design responsive sur mobile
- [ ] Domaine custom configuré (si applicable)

### Tester le formulaire:

1. Allez sur `/support`
2. Remplissez le formulaire
3. Vérifiez que vous recevez l'email dans votre boîte Web3Forms

## 🔧 Maintenance

### Mettre à jour le site:

1. Faites vos modifications localement
2. Committez et poussez vers GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. Vercel redéploie automatiquement!

### Rollback si problème:

1. Allez dans **Deployments** sur Vercel
2. Trouvez le dernier déploiement fonctionnel
3. Cliquez sur "⋯" → "Promote to Production"

## 📊 Analytics (Optionnel)

### Ajouter Vercel Analytics:

1. Dans Vercel, allez dans **Analytics**
2. Cliquez "Enable Analytics"
3. C'est activé automatiquement (pas de code requis)

### Ajouter Google Analytics:

1. Créez une propriété GA4
2. Ajoutez dans `app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🚨 Troubleshooting

### Erreur: "Build Failed"
- Vérifiez les logs dans Vercel
- Assurez-vous que `npm run build` fonctionne localement

### Formulaire ne fonctionne pas:
- Vérifiez que la clé Web3Forms est configurée
- Testez sur [web3forms.com/test](https://web3forms.com/test)

### Webcam ne fonctionne pas:
- Le site doit être en HTTPS (Vercel le fait automatiquement)
- L'utilisateur doit accepter les permissions

## 📞 Support

Questions? Contactez support@captureyourchapters.com

---

**Prêt pour le déploiement!** 🎉

Le site est optimisé et prêt pour la production Vercel.
