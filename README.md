# Nuranika Ramadhanti Alkautsar Setiawan - Professional Portfolio

> **QA Engineer | Performance Test Engineer**  
> *"Building Quality Through Testing."*

Modern, high-performance personal portfolio website redesigned with a **Dark Professional** aesthetic, preserving 100% of the original project assets, screenshots, and verified credentials. Configured for high-speed static deployment on **Vercel**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Deployment Platform**: [Vercel](https://vercel.com/)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Routing & Rewrites**: Configured via `vercel.json` for single-page application (SPA) routing
- **Design Aesthetic**: Dark Professional (`#0B0F19`, `#111827`, `#151D2B`, Indigo `#6366F1`, Sky `#38BDF8`)
- **Typography**: Inter & Plus Jakarta Sans

---

## 📂 Project Directory Structure

```
Gravity/
├── backup_original_portfolio/      # Backup of original portfolio HTML & assets
│   ├── index.html
│   └── assets/
│       ├── images/                 # elva-hrm.jpg, wmclinic.jpg, internitsat.jpg
│       └── logos/                  # logo.jpg, cypress.png, agile.png, etc.
├── dist/                           # Production build output (served by Vercel)
├── public/
│   └── assets/                     # Preserved static images, logos, & profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky glassmorphic header with scroll-spy & mobile drawer
│   │   ├── Hero.tsx                # Hero section with headline, profile photo & CTAs
│   │   ├── About.tsx               # Professional journey, IS foundation & values
│   │   ├── Experience.tsx          # Career timeline: BSI Performance Engineer & QA
│   │   ├── Skills.tsx              # Categorized skills: LoadRunner, Dynatrace, Cypress, etc.
│   │   ├── Projects.tsx            # Filterable project gallery with modal case studies
│   │   ├── ProjectModal.tsx        # Accessible deep-dive case study modal dialog
│   │   ├── Education.tsx           # Universitas Bung Karno & QA Bootcamp
│   │   ├── Certifications.tsx      # Research publication & credentials
│   │   ├── Contact.tsx             # Interactive email, form, LinkedIn, WhatsApp, & CV
│   │   ├── Footer.tsx              # Copyright & Back-to-Top
│   │   └── SocialIcons.tsx         # Brand icons for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.ts        # Centralized, easily editable content & data store
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Main layout
│   ├── index.css                   # Tailwind styles & custom scrollbars
│   └── main.tsx                    # React DOM entry
├── vercel.json                     # Vercel SPA routing rewrite configuration
├── index.html                      # HTML template with SEO & Google Fonts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Compile TypeScript and build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Step-by-Step Vercel Deployment via GitHub

### Step 1: Push Project to GitHub
Push your local code to your GitHub repository:
```bash
git add .
git commit -m "Configure portfolio for Vercel deployment"
git push origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com/) (sign in with your GitHub account).
2. On your Vercel Dashboard, click **"Add New..."** > **"Project"**.
3. Under **"Import Git Repository"**, select your repository:  
   `ikhasetiawan36/nuranikaramadhanti-portofolio` (or your chosen repository name).
4. Click **"Import"**.

### Step 3: Configure Project Settings on Vercel
Vercel automatically detects the Vite framework with the following preset settings:
- **Framework Preset**: `Vite`
- **Root Directory**: `./` (leave default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Deploy
Click **"Deploy"**. Vercel will build your application in under 30 seconds and provide you with a production URL (e.g., `https://nuranika-portfolio.vercel.app`), complete with automated SSL certificates and global edge CDN caching. Any future `git push` to your `main` branch will automatically trigger an instant production deployment.
