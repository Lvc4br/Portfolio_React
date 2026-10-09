# Luca Toniolo — React Portfolio

This repository contains the source code for my current personal portfolio, built with React and Vite.

- **Live portfolio:** http://64.181.168.160/portfolio/
- **Hosting:** Oracle Cloud
- **Application source:** [`Portfolio_React/`](./Portfolio_React/)

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

The application is configured to run under the `/portfolio/` path. The Nginx configuration example is in [`Portfolio_React/nginx-portfolio.conf`](./Portfolio_React/nginx-portfolio.conf).

**Note:** The current live URL uses HTTP, not HTTPS. Configure TLS on the server and then update the live link to HTTPS if a certificate is available.
