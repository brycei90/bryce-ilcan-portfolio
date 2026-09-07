# Bryce Ilcan Engineering Portfolio

Personal engineering portfolio showcasing power electronics, PCB design, embedded systems, and UAV avionics projects.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy on Netlify

1. In Netlify, choose **Add new project** and **Import an existing project**.
2. Select GitHub and choose `brycei90/bryce-ilcan-portfolio`.
3. Netlify will read `netlify.toml`, run `npm run build`, and configure Next.js support.
4. Deploy the site.

No environment variables are required.
