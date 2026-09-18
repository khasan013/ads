const KEY='luma-demo-user'; const initial={username:'khalid', points:0, createdAt:new Date().toISOString(), transactions:[], unlocked:[], lastBonus:null};
export const getUser=()=>JSON.parse(localStorage.getItem(KEY)||'null'); export const setUser=u=>localStorage.setItem(KEY,JSON.stringify(u));
export const seedUser=()=>{const u=getUser(); if(!u) setUser(initial); return getUser()||initial};
