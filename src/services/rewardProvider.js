// Replace this local demo implementation with a supported, policy-compliant rewarded-ad SDK.
// Server-side verification and reward fulfillment must be added before production.
export const showRewardedAd=({duration=15,onProgress,onRewardEarned,onAdClosed})=>new Promise(resolve=>{let remaining=duration; const id=setInterval(()=>{remaining-=1; onProgress?.(remaining); if(remaining<=0){clearInterval(id); onRewardEarned?.({points:10,sessionId:crypto.randomUUID()}); onAdClosed?.(); resolve();}},1000)});
