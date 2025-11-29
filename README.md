# Chapters - Landing Page

Official landing page for Chapters mobile app.

🌐 **Live Site**: [chapters-website on Vercel](https://chapters-website.vercel.app)
📦 **GitHub**: [gquthier/chapters-website](https://github.com/gquthier/chapters-website)

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

- `/` - Homepage with cinematic full-screen scroll (5 sections)
  - Interactive webcam demo in iPhone mockup
  - Testimonials, features, CTA
- `/privacy` - Privacy Policy (required for App Store)
- `/terms` - Terms of Service (required for App Store)
- `/support` - FAQ and contact form (Web3Forms)

## 🎨 Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **WebRTC** - Webcam feature
- **Web3Forms** - Contact form (no backend needed)
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

## 📧 Contact Email

All inquiries: **support@captureyourchapters.com**

This email is used for:
- Support requests
- Privacy inquiries
- Legal questions

## ⚙️ Configuration

### Web3Forms API Key

To enable the contact form, update `app/support/page.tsx` line 63:

```tsx
access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Get from web3forms.com
```

Or set as Vercel environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY`

## 🐛 Issues

Report issues at: [GitHub Issues](https://github.com/gquthier/chapters-website/issues)

## 📄 License

© 2025 Chapters. All rights reserved.
