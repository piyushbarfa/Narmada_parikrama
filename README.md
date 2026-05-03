# Narmada Parikrama WebApp

A simple React app about the Narmada River and a travel guide for Narmada Parikrama.

## Quick Start

1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Run locally:**
    ```bash
    npm run dev
    ```
3. **Open app:**
    Go to [http://localhost:5173](http://localhost:5173)

4. **Build for production:**
    ```bash
    npm run build
    ```
5. **Preview production build:**
    ```bash
    npm run preview
    ```

---

## Deployment (GitHub Pages)

For deploying to GitHub Pages (static hosting):

1. Install the gh-pages package:
    ```bash
    npm install --save-dev gh-pages
    ```
2. In `vite.config.js`, ensure you have:
    ```js
    base: './',
    ```
3. Add the following scripts to your `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4. Deploy to GitHub Pages:
    ```bash
    npm run deploy
    ```

See the [Vite docs for GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages) for more info.
