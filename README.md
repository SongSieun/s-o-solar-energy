# S&O Solar Energy Website

Production-ready marketing website for S&O Solar Energy, an independent solar advisory company.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Pretendard (Korean-optimized)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd s-o-solar-energy

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
s-o-solar-energy/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   └── page.tsx              # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Sticky navigation
│   │   └── Footer.tsx        # Site footer
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Services.tsx      # Services cards
│   │   ├── Process.tsx       # 4-step process
│   │   ├── WhyUs.tsx         # Why choose us + callout
│   │   ├── FAQ.tsx           # FAQ accordion
│   │   └── Contact.tsx       # Contact form
│   └── ui/
│       ├── Accordion.tsx     # Expandable FAQ items
│       ├── Badge.tsx         # Trust badges
│       ├── Button.tsx        # CTA buttons
│       ├── Card.tsx          # Content cards
│       └── Input.tsx         # Form inputs
├── lib/
│   ├── config.ts             # ⭐ CONTENT CONFIGURATION
│   └── utils.ts              # Utility functions
├── public/
│   └── favicon.ico           # Site favicon
└── tailwind.config.ts        # Tailwind configuration
```

## Content Configuration

All website content is centralized in `lib/config.ts`. Edit this file to update:

- **Company Information**: name, email, phone, address
- **SEO Settings**: title, description, keywords, OG image
- **Navigation**: menu items, CTA button
- **All Section Content**: hero, services, process, why us, FAQ, contact, footer

### Example: Updating Company Info

```typescript
// lib/config.ts
export const siteConfig = {
  company: {
    name: "S&O Solar Energy",
    nameKorean: "에스앤오 솔라 에너지",
    email: "contact@so-solar.co.kr",  // ← Update this
    phone: "02-1234-5678",             // ← Update this
    address: "서울특별시 강남구...",   // ← Update this
  },
  // ... rest of config
};
```

## Contact Form Setup

The contact form currently logs submissions to the console. To enable actual email sending:

### Option 1: Resend (Recommended)

```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST handler:
await resend.emails.send({
  from: 'website@so-solar.co.kr',
  to: 'contact@so-solar.co.kr',
  subject: `[문의] ${data.name} - ${data.type}`,
  html: `<p>이름: ${data.name}</p>...`
});
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

### Option 3: Webhook (Slack/Discord)

No additional packages needed - use fetch to POST to webhook URL.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
};
```

Then run `npm run build` and deploy the `out` directory.

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: "#eab308", // Main brand color (yellow)
        // ... other shades
      },
    },
  },
},
```

### Adding New Sections

1. Create component in `components/sections/`
2. Export from `components/sections/index.ts`
3. Add to `app/page.tsx`
4. Add navigation item in `lib/config.ts`

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliant
- Reduced motion support

## Performance

- Optimized web fonts (Pretendard CDN with subsetting)
- No external images/stock photos
- Minimal JavaScript (React Server Components where possible)
- CSS animations with `prefers-reduced-motion` support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Private - All rights reserved.
