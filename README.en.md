# SeekTrace CRM

A growth platform for foreign trade businesses — customer management, intelligent lead generation, deal tracking, and team collaboration in one unified workspace.

## What It Does

- **Customer 360** — Full customer profiles with A/B/C/D grading, interaction history, and health scores
- **Intelligent Prospecting** — AI-powered lead search across multiple data sources with automatic enrichment
- **Deal Pipeline** — End-to-end deal tracking from inquiry to close, with stage-based workflows
- **3D Customer Map** — Interactive globe visualization of your global customer base
- **Email Campaigns** — Built-in development email studio with templates and tracking
- **Team Collaboration** — RBAC-based role permissions, multi-team data isolation, and daily report sharing
- **Trade Documents** — PI, CI, PL generation and customs export support

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite 6
- **Backend**: Express + TypeScript + MySQL
- **Runtime**: Node.js 22, PM2 process manager
- **Reverse Proxy**: Nginx (Docker)

## Quick Start

```bash
# Install dependencies (npm workspaces)
npm install

# Build
npm run build

# Start backend
npx tsx backend/src/server.ts

# Frontend will be served from frontend/dist/
```

## License

Mulan PSL v2 — see [LICENSE](./LICENSE) for details.

---

*SeekTrace CRM — Equip your foreign trade team with intelligence.*
