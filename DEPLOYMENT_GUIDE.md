# 🚀 LAMSANO SYM - Deployment Guide

Complete instructions for deploying your website to production on various platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] Updated all `.env` variables with production values
- [ ] Replaced WhatsApp number with your actual number
- [ ] Updated all branding (logo, colors, text)
- [ ] Added all product images and team photos
- [ ] Tested the website on mobile and desktop
- [ ] Optimized and compressed all images
- [ ] Set up SSL certificate
- [ ] Configured custom domain DNS
- [ ] Created email addresses for support
- [ ] Set up Google Analytics (optional)
- [ ] Tested all links and forms
- [ ] Verified WhatsApp integration works
- [ ] Performance tested (Lighthouse score)

---

## 🚀 Quick Deployment (Easiest)

### Option 1: Vercel (Recommended for Next.js)

**⏱️ Time: 5 minutes**

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Set environment variables
# Go to: https://vercel.com/dashboard
# Select your project → Settings → Environment Variables
# Add all variables from .env.local

# 5. Your site is live!
# URL: https://your-project-name.vercel.app
```

**Custom Domain Setup:**
1. In Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., lamsano-sym.com)
3. Update nameservers at your domain registrar
4. SSL is automatic!

---

### Option 2: Netlify (Recommended for React)

**⏱️ Time: 5 minutes**

```bash
# Method 1: Using Netlify CLI
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build the project
npm run build

# 3. Deploy
netlify deploy --prod

# 4. Login to Netlify
# Visit the URL provided to authorize

# 5. Your site is live!
```

**Or Method 2: GitHub Integration (Automatic)**

```bash
# 1. Push your code to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to Netlify.com
# 3. Click "New site from Git"
# 4. Connect GitHub
# 5. Select repository
# 6. Build settings:
#    - Build command: npm run build
#    - Publish directory: dist (or build)

# 7. Click Deploy
# 8. Add environment variables in Netlify UI
# 9. Your site is live!
```

**Custom Domain Setup:**
1. In Netlify → Site Settings → Domain Management
2. Add your domain
3. Update nameservers at your registrar
4. SSL is automatic!

---

### Option 3: GitHub Pages (Free)

**⏱️ Time: 10 minutes**

```bash
# 1. Update package.json
# Add: "homepage": "https://yourusername.github.io/lamsano-sym"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Update package.json scripts
# Add:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# 4. Deploy
npm run deploy

# 5. Enable GitHub Pages
# Go to: Repository Settings → Pages
# Select: Deploy from a branch
# Branch: gh-pages
# Folder: / (root)

# 6. Your site is live!
# URL: https://yourusername.github.io/lamsano-sym
```

**Custom Domain Setup:**
1. Add CNAME file to public folder with your domain
2. Update DNS at your registrar to point to GitHub Pages
3. Enable in Repository Settings → Pages

---

## 🏢 Professional Hosting

### Option 4: AWS Amplify

**⏱️ Time: 15 minutes**

```bash
# 1. Install AWS CLI
npm install -g @aws-amplify/cli

# 2. Configure Amplify
amplify configure

# 3. Initialize project
amplify init

# 4. Add hosting
amplify add hosting
# Select: Hosting with Amplify Console
# Build: No
# Deploy: Yes

# 5. Publish
amplify publish

# 6. Your site is live!
# View at: Amplify Console
```

**Benefits:**
- Automatic HTTPS
- Global CDN
- Free tier available
- Excellent performance

---

### Option 5: Railway

**⏱️ Time: 10 minutes**

```bash
# 1. Go to Railway.app
# 2. Create account and connect GitHub
# 3. Create new project
# 4. Select repository
# 5. Configure environment variables:
#    - REACT_APP_WHATSAPP_NUMBER=your_number
#    - Add all other .env variables

# 6. Railway auto-deploys from git
# 7. Custom domain: Projects → Settings → Domains
# 8. Point DNS and done!
```

---

### Option 6: Traditional Hosting (cPanel)

**⏱️ Time: 20 minutes**

```bash
# 1. Build the project
npm run build

# 2. Connect to hosting via FTP/SSH
# Use FileZilla or similar

# 3. Upload build folder contents to:
# public_html/ or www/

# 4. Create .htaccess file in public_html:
```

**.htaccess (for React Router)**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Then:**
```bash
# 5. Upload .htaccess to public_html
# 6. Enable SSL certificate (Let's Encrypt - usually free)
# 7. Update domain DNS
# 8. Your site is live!
```

---

## 🌐 Domain & DNS Setup

### Register Domain

1. Go to: Namecheap, GoDaddy, or preferred registrar
2. Search for your domain (e.g., lamsano-sym.com)
3. Register for 1-3 years
4. Complete checkout

### Point DNS to Hosting

**For Vercel/Netlify:**
```
Nameservers to use:
ns1.vercel-dns.com
ns2.vercel-dns.com
```
or
```
Nameservers to use:
dns1.p04.nsone.net
dns2.p04.nsone.net
dns3.p04.nsone.net
dns4.p04.nsone.net
```

**For Traditional Hosting:**
- Use nameservers provided by your host
- Or create A records pointing to hosting IP

### Enable HTTPS/SSL

- **Vercel/Netlify**: Automatic
- **AWS Amplify**: Automatic
- **GitHub Pages**: Automatic
- **Traditional Hosting**: Use Let's Encrypt (usually free with cPanel)

---

## 🔧 Post-Deployment Configuration

### 1. Environment Variables

Set these on your hosting platform:

```env
REACT_APP_WHATSAPP_NUMBER=212612345678
REACT_APP_SITE_URL=https://lamsano-sym.com
REACT_APP_CONTACT_EMAIL=contact@lamsano-sym.com
REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### 2. Email Configuration

Set up email forwarding or professional email:

```
contact@lamsano-sym.com → your@email.com
support@lamsano-sym.com → your@email.com
info@lamsano-sym.com → your@email.com
```

### 3. Analytics Setup

**Google Analytics:**
1. Go to analytics.google.com
2. Create new property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to .env.local and redeploy

**Facebook Pixel:**
1. Create Facebook Business account
2. Set up pixel in Events Manager
3. Get Pixel ID
4. Update index.html with your ID

---

## 📊 Performance Optimization

### Verify Performance

After deployment, test performance:

```bash
# Use Lighthouse (Chrome DevTools)
# Lighthouse → Generate Report

# Or use Pagespeed Insights:
# https://pagespeed.web.dev/

# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### Optimize Images

Before uploading images:

```bash
# Compress with TinyPNG, ImageOptim, or similar
# Recommended tools:
# - TinyPNG.com
# - ImageOptim (Mac)
# - FileOptimizer (Windows)

# Formats:
# - Use WebP for better compression
# - Fallback to JPG/PNG
# - Max file size: 200KB per image
```

### Enable Caching

**For Vercel/Netlify:** Automatic

**For traditional hosting:** Add to .htaccess:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access 1 year"
  ExpiresByType image/png "access 1 year"
  ExpiresByType text/css "access 1 month"
  ExpiresByType text/javascript "access 1 month"
</IfModule>
```

---

## 🔒 Security Configuration

### 1. Enable CORS

If using an API backend:

```javascript
// Backend (Node.js/Express)
const cors = require('cors');
app.use(cors({
  origin: 'https://lamsano-sym.com',
  credentials: true
}));
```

### 2. Set Security Headers

**For Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 3. Update Security Policy

In index.html:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' www.googletagmanager.com;
  img-src 'self' data: https:;
  font-src 'self' data: https://fonts.gstatic.com;
  connect-src 'self' www.google-analytics.com;
">
```

---

## 📱 Mobile App Conversion

### PWA Installation

Your site is already PWA-ready! Users can:

1. Open on mobile
2. Share → Add to Home Screen
3. App appears on home screen
4. Works like native app!

To enhance:
- Add app icons to public/icons/
- Update manifest.json with your brand colors
- Test with: Chrome DevTools → Lighthouse → PWA

---

## 🔄 Continuous Deployment

### Setup Auto-Deploy from GitHub

**Vercel:**
```
1. Connect GitHub repository
2. Auto-deploys on every push to main
3. Preview deployments for pull requests
```

**Netlify:**
```
1. Connect GitHub repository
2. Auto-deploys on every push
3. Previews for branches
```

---

## 📈 Monitor & Maintain

### Weekly Tasks

- [ ] Check analytics
- [ ] Monitor website performance
- [ ] Check for broken links
- [ ] Review error logs
- [ ] Verify email is working

### Monthly Tasks

- [ ] Update products/inventory
- [ ] Post social media updates
- [ ] Check user feedback
- [ ] Optimize performance
- [ ] Update content as needed

### Quarterly Tasks

- [ ] Major feature updates
- [ ] Security audits
- [ ] Performance optimization
- [ ] Customer surveys
- [ ] Plan new features

---

## 🆘 Troubleshooting Deployment

### Issue: "Build failed"
**Solution:** Check logs for errors. Usually missing dependencies.
```bash
npm install
npm run build
```

### Issue: "404 errors on refresh"
**Solution:** Make sure routing is configured correctly in .htaccess or hosting settings.

### Issue: "WhatsApp link not working"
**Solution:** Verify phone number format includes country code (no + or - signs).

### Issue: "Environment variables not working"
**Solution:** Redeploy after setting environment variables on hosting platform.

### Issue: "Images not loading"
**Solution:** Check image paths start with / and are in public folder.

### Issue: "Styles not applying"
**Solution:** Rebuild and clear browser cache (Ctrl+Shift+Delete / Cmd+Shift+Delete).

---

## 📞 Support Resources

### Hosting Support

- **Vercel:** vercel.com/support
- **Netlify:** netlify.com/support
- **GitHub:** github.community
- **AWS:** aws.amazon.com/support

### Performance Tools

- Lighthouse: chrome://inspect
- PageSpeed Insights: pagespeed.web.dev
- GTmetrix: gtmetrix.com
- WebPageTest: webpagetest.org

### SEO Tools

- Google Search Console: search.google.com/search-console
- Google Analytics: analytics.google.com
- Bing Webmaster Tools: bing.com/webmasters

---

## ✨ Launch Checklist

Before going live, verify:

- [ ] Domain is pointing correctly
- [ ] SSL/HTTPS is enabled
- [ ] Environment variables are set
- [ ] Analytics is tracking
- [ ] WhatsApp integration works
- [ ] All links are functional
- [ ] Mobile version is responsive
- [ ] Images are optimized
- [ ] Performance score is 90+
- [ ] Accessibility is good
- [ ] SEO is configured
- [ ] Email forwarding works
- [ ] Social media links work
- [ ] Footer links are correct
- [ ] About/Team info is accurate

---

## 🎉 You're Live!

Congratulations! Your LAMSANO SYM website is now live! 

**Next Steps:**
1. Share with team and friends
2. Set up social media posts
3. Send launch email
4. Monitor analytics
5. Gather user feedback
6. Plan next features

---

## 📝 Additional Resources

- React Deployment: react.dev/learn/deployment
- Tailwind CSS: tailwindcss.com/docs
- Web Performance: web.dev/performance
- SEO Guide: moz.com/beginners-guide-to-seo

---

**Made with ❤️ for Sustainable Fashion** 🌱
