import React from 'react'

const handleNameChange = () =>{
    const names = ['bob','mil','lucy'];
    const int = Math.floor(Math.random()*3);
    return names[int];
};

const Content = () => {
  return (
    <main>
        Hellow {handleNameChange()}!
    </main>
  )
}

export default Content