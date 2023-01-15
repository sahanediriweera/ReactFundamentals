import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item,changeState,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
        <input type="checkbox" checked={item.checked} onClick = {()=> changeState(item.id)}/>
        <label onDoubleClick={()=> changeState(item.id)} style={(item.checked)? {textDecoration:'line-through'}:null}>{item.item}</label>
        <button>Delete</button> 
        <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)}/>
    </li>
  )
}

export default LineItem