# Chapters - Landing Page

Official landing page for Chapters mobile app.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy" (no configuration needed)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🌐 Custom Domain Setup

After deploying to Vercel:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your domain (e.g., `getchapters.app`)
4. Update your DNS records as instructed by Vercel

## 📝 Pages

- `/` - Homepage with hero, features, testimonials
- `/privacy` - Privacy Policy (required for App Store)
- `/terms` - Terms of Service (required for App Store)
- `/support` - FAQ and contact

## 🎨 Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Hosting

## 📱 App Store Requirements

Update these URLs in App Store Connect:

- **Marketing URL**: `https://getchapters.app`
- **Privacy Policy URL**: `https://getchapters.app/privacy`
- **Support URL**: `https://getchapters.app/support`

## 🔧 Customization

### Update Brand Colors

Edit `tailwind.config.js`:

```js
colors: {
  brand: {
    500: '#0ea5e9', // Your primary color
    600: '#0284c7',
  }
}
```

### Update Content

- Hero: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Testimonials: `components/SocialProof.tsx`

### Add Analytics

Add to `app/layout.tsx`:

```tsx
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

## 📧 Contact Emails

Update these email addresses before deploying:

- `support@getchapters.app` (Support)
- `privacy@getchapters.app` (Privacy inquiries)
- `legal@getchapters.app` (Legal inquiries)

## 🐛 Issues

Report issues at: [GitHub Issues](https://github.com/yourusername/chapters-website/issues)

## 📄 License

© 2025 Chapters. All rights reserved.
