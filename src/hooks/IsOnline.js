import {useState,useEffect} from 'react'
/*
export function useIsOnline(){
  useEffect(()=>{
    setInterval(()=>{
      console.log(window.navigator.onLine);
     return window.navigator.onLine?true:false;
    },3000)
   
  },[])
  return  window.navigator.onLine?true:false;
}
*/
// ......OR......

export function useIsOnline(){
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
      window.addEventListener('online',()=>{
        setIsOnline(true);
      })
  
      window.addEventListener('offline',()=>{
        setIsOnline(false);
      })
    },[])
    return isOnline;
  }