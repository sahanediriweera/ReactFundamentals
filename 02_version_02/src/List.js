import React from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (
    <ul>{
        items.map(item => (<ListItem key = {items.id} item = {item}/>))
        }
    </ul>
  )
}

export default List