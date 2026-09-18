# Luma Rewards demo

A responsive React + Vite frontend prototype for transparent, point-based sponsored experiences. It uses localStorage only—there is no backend, database, real advertisement, or monetary reward.

## Run locally

```bash
npm install
npm run dev
```

Demo login: `khalid` / `1234`.

## Reward provider integration

`src/services/rewardProvider.js` is the intended integration boundary for a legitimate, supported rewarded-ad SDK. A production integration must use the provider's official implementation and policies, user consent, server-side verification, frequency controls where required, and fraud prevention. It must never create artificial impressions, clicks, refreshes, or ad traffic.

## Production requirements

This project uses frontend-only demo authentication and localStorage. It is **not suitable** for production authentication, payment processing, or sensitive information. Before production, move authentication, point balances, transaction history, redemption logic, provider callbacks, authorization, validation, and anti-fraud controls to a secured backend with a database.
