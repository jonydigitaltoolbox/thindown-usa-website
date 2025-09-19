# THINDOWN USA Website

A modern, responsive website for THINDOWN USA - the world's first real down fabric manufacturer, now with a state-of-the-art facility in New York.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Architecture

This project follows our [coding rules](./coding-rules.md) for maintainable, composable software:

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animation**: Framer Motion

### Project Structure
```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Homepage
│   ├── technology/       # Technology page
│   ├── applications/     # Applications showcase
│   ├── contact/          # Contact page with form
│   ├── military-access/  # Military-specific page
│   └── request-sample/   # Sample request form
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button with variants
│   │   ├── Input.tsx     # Form input with validation
│   │   └── Card.tsx      # Card component system
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Main navigation
│   │   └── Footer.tsx    # Site footer
│   └── forms/            # Form components
│       └── ContactForm.tsx
├── data/                 # Static data and content
│   ├── products.ts       # Product line information
│   ├── applications.ts   # Application categories
│   └── features.ts       # Feature definitions
├── lib/
│   └── utils.ts          # Utility functions
└── types/
    └── index.ts          # TypeScript type definitions
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: #0ea5e9 (THINDOWN brand blue)
- **Secondary Yellow**: #facc15 (Accent color from original site)
- **Accent Red**: #ef4444 (Military/alert applications)
- **Accent Green**: #22c55e (Sustainability/success)

### Typography
- **Display Font**: Montserrat (headings, logos)
- **Body Font**: Inter (body text, UI)

### Component Variants
- **Buttons**: primary, secondary, outline, ghost, destructive
- **Cards**: default, elevated, outlined, filled
- **Inputs**: Standard with validation states

## 📱 Pages Overview

### Core Pages
1. **Homepage** (`/`) - Hero, features, USA manufacturing focus
2. **Technology** (`/technology`) - Technical deep dive, product lines
3. **Applications** (`/applications`) - Industry-specific solutions
4. **About** (`/about`) - Company story, USA facility
5. **Contact** (`/contact`) - Contact form and information
6. **Sustainability** (`/sustainability`) - Environmental focus

### Specialized Pages
7. **Military Access** (`/military-access`) - Defense applications
8. **Request Sample** (`/request-sample`) - Sample request form
9. **Technical Specs** (`/technical-specs`) - Detailed specifications
10. **Case Studies** (`/case-studies`) - Success stories
11. **Press Kit** (`/press-kit`) - Media resources

## 🔧 Development

### Code Quality
- **ESLint**: Configured for Next.js and TypeScript
- **TypeScript**: Strict mode enabled
- **Zod**: Runtime type validation for forms
- **Coding Rules**: Follow [coding-rules.md](./coding-rules.md)

### Key Principles
- **Simple over Easy**: Single purpose, minimal coupling
- **Compose, don't complect**: Independent parts at edges
- **Split I/O from logic**: Pure functions, explicit side effects
- **Type safety**: Zod schemas for all external data

### Form Validation
All forms use Zod schemas for type-safe validation:
```typescript
// Example: Contact form schema
export const ContactFormSchema = z.object({
  firstName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  // ... other fields
});
```

## 🚀 Deployment

### Environment Variables
Create `.env.local`:
```env
# Contact form endpoint (when implemented)
NEXT_PUBLIC_CONTACT_ENDPOINT=your-contact-api-endpoint

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Build Commands
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Production build
npm run build

# Production server
npm start
```

### Deployment Platforms
- **Recommended**: Vercel (optimized for Next.js)
- **Alternative**: Netlify, AWS, or any Node.js hosting

## 🎯 Features

### Performance Optimizations
- **Next.js Image**: Optimized images with WebP/AVIF
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic with Next.js App Router
- **SEO**: Comprehensive metadata and structured data

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Screen Readers**: Proper ARIA labels

### Mobile Responsiveness
- **Mobile-first**: Tailwind CSS responsive design
- **Touch Targets**: Minimum 44px touch targets
- **Viewport**: Proper viewport meta tag
- **Performance**: Optimized for mobile networks

## 🔒 Security

### Form Security
- **Validation**: Client and server-side validation
- **CSRF**: TODO - Implement CSRF protection
- **Rate Limiting**: TODO - Implement rate limiting
- **Sanitization**: Input sanitization on forms

### Content Security
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Force HTTPS in production
- **Headers**: Security headers via Next.js config

## 📊 Analytics & Monitoring

### Recommended Integrations
- **Google Analytics**: User behavior tracking
- **Google Tag Manager**: Marketing tag management
- **Sentry**: Error monitoring and performance
- **Vercel Analytics**: Core web vitals monitoring

## 🛠️ Customization

### Adding New Pages
1. Create page in `src/app/[page-name]/page.tsx`
2. Add navigation link in `src/components/layout/Header.tsx`
3. Update sitemap and SEO metadata

### Modifying Content
- **Products**: Edit `src/data/products.ts`
- **Applications**: Edit `src/data/applications.ts`
- **Features**: Edit `src/data/features.ts`

### Styling Changes
- **Colors**: Update `tailwind.config.js` theme
- **Components**: Modify components in `src/components/ui/`
- **Global Styles**: Edit `src/app/globals.css`

## 🤝 Contributing

### Code Standards
1. Follow [coding-rules.md](./coding-rules.md)
2. Use TypeScript for all new code
3. Add proper error handling
4. Include JSDoc comments for public APIs
5. Test forms and user interactions

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes following coding rules
# Commit with descriptive messages
git commit -m "feat: add military specifications page"

# Push and create PR
git push origin feature/new-feature
```

## 📞 Support

### Technical Issues
- Check [coding-rules.md](./coding-rules.md) for architecture guidance
- Review component documentation in JSDoc comments
- Test locally before deployment

### Content Updates
- Product information: Update data files in `src/data/`
- Images: Add to `public/images/` with proper alt text
- Forms: Update Zod schemas for validation changes

## 📄 License

Copyright © 2024 THINDOWN USA. All rights reserved.

---

**Built with ❤️ in New York** - Supporting American manufacturing and innovation.
