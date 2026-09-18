import {getUser,seedUser,setUser} from './storage'; const AUTH='luma-demo-auth';
export const login=(username,password)=>{if(username.toLowerCase()!=='khalid'||password!=='1234') throw new Error('Invalid username or password.'); const user=seedUser(); setUser({...user,username:'khalid'}); localStorage.setItem(AUTH,'true'); return getUser()};
export const logout=()=>localStorage.removeItem(AUTH); export const isAuthed=()=>localStorage.getItem(AUTH)==='true'; export const currentUser=()=>getUser()||seedUser();
