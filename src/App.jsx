import { useState , useEffect } from 'react'

import './App.css'
// import { useIsOnline } from './hooks/IsOnline';
// import { useMousePointer } from './hooks/IsMouse';
// import {useWindowSize} from './hooks/windowSize.js';
import {useInterval} from './hooks/useinterval.js';
import useDebounce from './hooks/useDebounce.js';
function App() {
  // const isOnline = useIsOnline();
  // const mousePointer  = useMousePointer();
  // const dimensions = useWindowSize();
  // const c = useInterval();
  const [value,setValue] = useState(0);
  const debouncedValue = useDebounce(value,500);
  return (
    <>
      {/* your mouse position is {mousePointer.x} {mousePointer.y} */}
      {/* {isOnline ? "You are online yay!" : "You are not online"} */}
      {/* window size is
      <br></br>
       width:{dimensions.width} 
       <br></br>
        height:{dimensions.height} */}
        {/* <div>count is :{c}</div> */}
        debounced value is {debouncedValue}
        <input type='text' onChange={e=>setValue(e.target.value)}/>
   </>
  )
}

export default App
