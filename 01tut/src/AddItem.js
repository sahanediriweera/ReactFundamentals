import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem,submit}) => {
  return (
    <form className='addForm' onSubmit={submit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
        autoFocus
        id='addItem'
        type='text'
        placeHolder = 'addItem'
        required
        onChange={(e)=> setNewItem(e.target.value)}
        />

        <button
        type = 'submit'
        aria-label="Add Item"
        />

        <FaPlus/>

    </form>
  )
}

export default AddItem