import React, { useState, useEffect } from 'react';
import "./style.css";

const UseEffect = () => {
    // Value of initialdata
    const initialData = 0;
    // Code for useeffect
    const [myNum, setMyNum] = useState(initialData);

    // Run the function
    useEffect(() => {
        document.title = `chats(${myNum})`
    })

  return (
    <>
    <div className="center_div">
        <p>{ myNum }</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
    </div>
    </> 
  )
}

export default UseEffect