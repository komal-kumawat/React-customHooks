import React, { useState , useEffect } from 'react'

export function useInterval(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>setCount((c)=>c+1),1000);
        return () => clearInterval(interval);
    },[])
  return count;
}

