# THINDOWN USA Website Deployment Guide

## 🚀 Quick Deployment

### Prerequisites
- Node.js 18+ installed
- Git repository access
- Environment variables configured

### Local Development
```bash
# Clone repository
git clone <repository-url>
cd thindown-new-site

# Install dependencies
npm install

# Copy environment variables
cp env.local.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev
```

## 🌐 Production Deployment

### Recommended: Vercel (Optimized for Next.js)

#### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_CONTACT_ENDPOINT
vercel env add SMTP_HOST
# ... add other environment variables
```

#### Option 2: GitHub Integration
1. Connect repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Automatic deployments on push to main branch

### Alternative: Netlify

#### Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

#### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

### Docker Deployment

#### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Commands
```bash
# Build image
docker build -t thindown-usa .

# Run container
docker run -p 3000:3000 thindown-usa
```

## 🔧 Environment Configuration

### Required Environment Variables
```env
# API Endpoints
NEXT_PUBLIC_CONTACT_ENDPOINT=https://api.thindown.us/contact
NEXT_PUBLIC_SAMPLE_REQUEST_ENDPOINT=https://api.thindown.us/sample-request

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://thindown.us
NEXT_PUBLIC_SITE_NAME=THINDOWN USA

# Email Configuration
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@thindown.us

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Platform-Specific Setup

#### Vercel Environment Variables
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add each variable with appropriate environment scope (Production, Preview, Development)
3. Redeploy to apply changes

#### Netlify Environment Variables
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add each variable
3. Trigger new deploy

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check for unused dependencies
npx depcheck

# Optimize images
# Place optimized images in public/images/
```

### CDN Configuration
- Enable automatic image optimization
- Configure proper caching headers
- Use WebP/AVIF formats when supported

### Monitoring Setup
```javascript
// Add to next.config.js for production monitoring
module.exports = {
  // ... other config
  experimental: {
    instrumentationHook: true,
  },
  // Enable bundle analyzer in production
  env: {
    ANALYZE: process.env.ANALYZE,
  },
}
```

## 🔒 Security Checklist

### Pre-Deployment Security
- [ ] Environment variables properly set
- [ ] No sensitive data in client-side code
- [ ] HTTPS enforced in production
- [ ] Security headers configured
- [ ] Form validation on both client and server
- [ ] Rate limiting implemented for forms

### Security Headers (next.config.js)
```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 🚨 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npm run type-check

# Lint issues
npm run lint
```

#### Environment Variable Issues
- Ensure variables starting with `NEXT_PUBLIC_` are accessible in browser
- Server-side variables should NOT start with `NEXT_PUBLIC_`
- Restart development server after adding new variables

#### Image Optimization Issues
- Ensure images are in `public/images/` directory
- Add image domains to `next.config.js`
- Use proper aspect ratios and sizes

### Performance Issues
```bash
# Check bundle size
npm run build
# Look for large chunks in output

# Analyze what's in your bundle
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 📈 Post-Deployment

### Analytics Setup
1. Configure Google Analytics with `NEXT_PUBLIC_GA_ID`
2. Set up Google Search Console
3. Configure Vercel Analytics (if using Vercel)
4. Monitor Core Web Vitals

### SEO Verification
- [ ] Sitemap generated and submitted
- [ ] Meta tags properly configured
- [ ] Open Graph images working
- [ ] Schema markup validated
- [ ] Mobile-friendly test passed

### Form Testing
- [ ] Contact form submissions working
- [ ] Sample request form functional
- [ ] Email notifications configured
- [ ] Form validation working on both client/server

### Monitoring
- [ ] Error tracking configured (Sentry recommended)
- [ ] Uptime monitoring setup
- [ ] Performance monitoring active
- [ ] Security monitoring enabled

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 📞 Support

### Deployment Issues
- Check build logs for specific errors
- Verify all environment variables are set
- Test locally before deploying
- Check platform-specific documentation

### Performance Issues
- Use Lighthouse for performance auditing
- Monitor Core Web Vitals
- Optimize images and fonts
- Review bundle size regularly

---

**Deployment Checklist:**
- [ ] Environment variables configured
- [ ] Build passes locally
- [ ] Security headers enabled
- [ ] Analytics configured
- [ ] Forms tested
- [ ] Performance optimized
- [ ] Monitoring setup complete
