# Luma Rewards demo

A responsive React + Vite frontend prototype for transparent, point-based sponsored experiences. It uses localStorage only—there is no backend, database, real advertisement, or monetary reward.

## Run locally

```bash
npm install
npm run dev
```

Demo login: `khalid` / `1234`.

## Google Ad Manager rewarded ads

This project requests rewarded web ads through Google Publisher Tag (GPT), not through the AdSense site-verification script. Create a rewarded web ad unit in Google Ad Manager and configure these public environment variables in Render:

```bash
VITE_AD_PROVIDER=google-ad-manager
VITE_REWARDED_AD_UNIT_PATH=/YOUR_NETWORK_CODE/YOUR_REWARDED_AD_UNIT
```

`VITE_REWARDED_AD_UNIT_PATH` must be the Google Ad Manager rewarded ad-unit path. It must **not** contain an AdSense publisher ID (`ca-pub-...`) or an AdSense ad-slot ID. When a user requests an ad, GPT must fire `rewardedSlotReady` before it can be displayed; points are added only after `rewardedSlotGranted`. If configuration, consent, device support, or eligible inventory is unavailable, the UI shows an unavailable message and grants no points. Ad availability can vary by country, device, browser, consent, inventory, advertiser demand, and account configuration.

## Production requirements

This project uses frontend-only demo authentication and localStorage. It is **not suitable** for production authentication, payment processing, or sensitive information. Before production, move authentication, point balances, transaction history, redemption logic, provider callbacks, authorization, validation, and anti-fraud controls to a secured backend with a database.
