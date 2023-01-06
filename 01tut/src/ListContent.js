import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const ListContent = () => {
    const [Items,setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const changeState = (id) => {
        const listItems = Items.map((item)=> item.id === id? {...item,checked:!item.checked}:item);
        setItems(listItems);
        localStorage.setItem('shoppinglist',listItems);
    };

    const handleDelete = (id) => {
        const listItems = Items.filter((item)=> item.id !==id);
        setItems(listItems);
    }

  return (
    <main>
        {(Items.length)?(
        <ul>
            {Items.map((item)=>(
                <li className='item' key={item.id}>
                    <input type="checkbox" checked={item.checked} onClick = {()=> changeState(item.id)}/>
                    <label onDoubleClick={()=> changeState(item.id)} style={(item.checked)? {textDecoration:'line-through'}:null}>{item.item}</label>
                    <button>Delete</button> 
                    <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)}/>
                </li>
            ))}
        </ul>):(<p style={{marginTop:'2rem'}}> Your List Is Empty</p>)
    }
    </main>
  )
}

export default ListContent