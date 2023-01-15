import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import ListContent from './ListContent';
import SearchItem from './SearchItem';
import { useState } from 'react';



function App() {

  const [Items,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem,setNewItem] = useState('');
  const [search,setSearch] = useState('');

  const setAndSaveItems = (newItems)=> {
    setItems(newItems);
    localStorage.setItem('shoppinglist',JSON.stringify(newItems));
  }
  
  const addItem = (item)=> {
    const id = id.length? Items[Items.length-1].id+1 : 1;
    const myNewItem = {id,checked:false,item};
    const listItems = [...Items,myNewItem];
    setAndSaveItems(listItems);
  }

  const changeState = (id) => {
    const listItems = Items.map((item)=> item.id === id? {...item,checked:!item.checked}:item);
    setAndSaveItems(listItems);
  };
  
  const handleDelete = (id) => {
    const listItems = Items.filter((item)=> item.id !==id);
    setAndSaveItems(listItems);
  }

  const submit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header/>
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        submit = {submit}
      />
      <ListContent Items={Items} handleDelete={handleDelete} changeState={changeState}/>
      <Footer length={Items.length}/> 
    </div>
  );
}

export default App;
