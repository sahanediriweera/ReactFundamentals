import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate('/user');
    }
    
  return (

    <button onClick={handleClick}>
        Click Me
    </button>
  )
}

export default Home