import React from 'react'
import { useState } from 'react';



const Content = () => {
  const [name,setName] = useState('Sahan');
  const [count,setCount] = useState(0);

  const handleNameChange = () =>{
    const names = ['bob','mil','lucy'];
    const int = Math.floor(Math.random()*3);
    setName(names[int]);
  };
  const handleClick = () => {
    console.log("The button was clicked");
  };

  const handleClickName = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClickEvent = (e)=> {
    console.log(e);
  }

  const handleCount = () => {
    setCount(count+1);
    console.log(count);
  };

  const handleCountCurrentValue = () => {
    console.log(count);
  }
  
  return (
    <main>
        Hellow {name}!

        <button onClick={handleClick}>
          Click It
        </button>

        <button onClick={() => {handleClickName('Sahan')}}>
          Click for name 
        </button>

        <button onClick={(e)=>{handleClickEvent(e)}}>
          Click for event 
        </button>

        <button onClick={handleNameChange}>
          Click to use State 1
        </button>

        <button onClick={handleCount}>
          Click to change count 
        </button>

        <button onClick={handleCountCurrentValue}>
          Click to view Count 
        </button>

    </main>
  )
}

export default Content