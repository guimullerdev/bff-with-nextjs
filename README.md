# 🚀 Exemplo BFF vs Client Fetch | Next.js 15

![Server Side Rendering](https://img.shields.io/badge/SSR-Enabled-success)
![Client Side Fetch](https://img.shields.io/badge/Client%20Fetch-Demo-blue)
![Performance Focus](https://img.shields.io/badge/Performance-Optimized-brightgreen)

This project practically demonstrates the difference in flow, maintenance, and performance between two ways of consuming external APIs: direct fetch from the client (React/browser) and via Backend-for-Frontend (BFF) using Next.js (SSR or API routes).

Using BFF is increasingly common in real-world medium/large-scale projects, as it simplifies the frontend experience and centralizes all payload handling, authentication, and data adaptation.

- **BFF:** Centralizes and standardizes data logic and transformation, delivers the final processed payload to the Frontend, improves performance, security, and maintainability.
- **Client:** All processing, requests, and transformation must be done in the browser; this generates more external requests, duplication of logic, and API exposure.

---

| Feature            | BFF (Server/SSR)            | Client Only                |
| ------------------ | --------------------------- | -------------------------- |
| Number of Requests | 1 (optimized and cacheable) | 1 + N (multiplied)         |
| Performance        | Fast (SSR/SSG)              | Depends on user's network  |
| Security           | Hidden and protected API    | API exposed in the browser |
| Maintenance        | Centralized (BFF)           | Duplicated across frontend |

## 💡 Performance Demonstration

Tests conducted with [Lighthouse](https://developers.google.com/web/tools/lighthouse) clearly show the differences in approach:

### SSR/BFF

![SSR network example](docs/server-performance.png)
<sub>The frontend receives all processed content in the first response</sub>

### Client-side

![Client fetch network example](docs/client-performance.png)
<sub>The browser executes multiple calls to render the screen, increasing latency and overloading the user's network</sub>

---

### This represents:

- Lower load on the user's browser
- Less perceived latency
- Better user experience for the application
- Fewer risks with external API changes

### 🚀 Why use BFF?

- Centralize business rules and data processing
- Reduce coupling and exposure of sensitive endpoints
- Facilitate API testing and versioning

### 🔧 How to run the project

```bash
git clone https://github.com/guimullerdev/bff-with-nextjs
cd bff-with-nextjs
yarn install
yarn dev
```

### 🔧 How to view the flows in the browser

- SSR/BFF:
  - Local: http://localhost:3000
  - External: https://bff-with-nextjs.vercel.app
- Client-side:
  - Local: http://localhost:3000/client
  - External: https://bff-with-nextjs.vercel.app/client

### ℹ️ Note:

- When testing in production, the absolute performance difference might be smaller (a difference of 2-4 points in Lighthouse), thanks to optimized infrastructure and local server networks.
- In real-world environments (end-user, 4G, remote regions), the gains from SSR/BFF are usually even more significant, reaching +8~10 points or improving metrics like First Contentful Paint and TTI.

### ⚡ Realistic test tip:

- Activate 3G or "Slow 4G" network simulation (Network Throttling)
- With CPU Throttling activated (Lighthouse recommended default)
- In mobile mode
