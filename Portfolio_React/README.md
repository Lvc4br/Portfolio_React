# Luca Toniolo — 3D × Code Portfolio

A minimal React/Vite portfolio designed to present 3D work, programming and the intersection between both.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Important

Some project cards use CSS-generated placeholder visuals. Replace them with your own renders, screenshots and breakdown images inside `src/assets/` as the projects are ready.

Review social links and test the contact form before publishing.

## Deploy on Oracle Cloud

Este projeto está configurado para ser servido em `https://SEU-IP/portfolio/`.

- O Vite usa `base: "/portfolio/"`.
- O React Router usa `/portfolio` como `basename`.
- As imagens ficam em `src/assets` e são importadas pelo Vite, evitando URLs absolutas quebradas.
- Apache: use o `.htaccess` incluído para encaminhar rotas do React para `index.html`.
- Nginx: aplique o bloco de `nginx-portfolio.conf` no `server` que atende `/portfolio/`.

Hierarquia principal:

- `/portfolio/` — Home
- `/portfolio/work` — Work
- `/portfolio/work/3d` — 3D
- `/portfolio/work/code` — Code

Os caminhos antigos `/portfolio/3d` e `/portfolio/programacao` redirecionam para a nova hierarquia.
