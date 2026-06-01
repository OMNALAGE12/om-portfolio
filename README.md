# Om Pandurang Nalage — Portfolio (React + Vite)

## Folder Structure

```
om-portfolio/
├── public/
│   └── profile.png          ← Your photo goes here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Blobs.jsx
│   │   └── SectionWrapper.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to GitHub + Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/om-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to vercel.com → Sign in with GitHub
2. Click **Add New Project** → Select `om-portfolio`
3. Framework: **Vite** (auto-detected)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy** ✅

Every `git push` auto-redeploys.
