# Luca Toniolo — React Portfolio

This repository contains the source code for my current personal portfolio, built with React and Vite.

- **Live portfolio:** http://64.181.168.160/portfolio/
- **Hosting:** Oracle Cloud
- **Application source:** the `Portfolio_React/` directory at the repository root.

## Run locally

```bash
cd Portfolio_React
npm install
npm run dev
```

## Production build

```bash
cd Portfolio_React
npm install
npm run build
```

## Deployment notes

The application is configured to run under the `/portfolio/` path. The Nginx configuration example is in [`nginx-portfolio.conf`](./nginx-portfolio.conf).

**Note:** The current live URL uses HTTP, not HTTPS. Configure TLS on the server and then update the live link to HTTPS if a certificate is available.
