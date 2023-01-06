import React from 'react'

const handleNameChange = () =>{
    const names = ['bob','mil','lucy'];
    const int = Math.floor(Math.random()*3);
    return names[int];
};

const Content = () => {
  const handleClick = () => {
    console.log("The button was clicked");
  };

  const handleClickName = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClickEvent = (e)=> {
    console.log(e);
  }
  
  return (
    <main>
        Hellow {handleNameChange()}!

        <button onClick={handleClick}>
          Click It
        </button>

        <button onClick={() => {handleClickName('Sahan')}}>
          Click for name 
        </button>

        <button onClick={(e)=>{handleClickEvent(e)}}>
          Click for event 
        </button>
    </main>
  )
}

export default Content