import React from 'react';
import LineItem from './LineItem';


const ListItems = ({Items,changeState,handleDelete}) => {
  return (
    <ul>
            {Items.map((item)=>(
                <LineItem Key={item.id} item={item} changeState={changeState} handleDelete={handleDelete}/>
            ))}
        </ul>
  )
}

export default ListItems