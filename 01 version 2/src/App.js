import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3000/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetError] = useState(null);
  const [IsLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("Did not recieve this data");
        const listItems = await response.json();
        setItems(listItems);
        setFetError(null);
      }catch (err){
        setFetError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    (async ()=> await fetchItems())();
    
  },[])

  useEffect(()=>{
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  },[items]);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

    const postOptions = {
      method:POST,
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL,postOptions);
    if(result) setFetError(result);

  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);

    const myItem = listItems.filter((item)=> item.id === id);
    const updateOptions = {
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    }

    const reqUrl = `${API_URL}/${id}`;

    const result = await apiRequest(reqUrl,updateOptions);
    if(result) setFetError(result);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {
          IsLoading && <p> Items still loading</p>
        }

        {
          fetchError && <p style= {{color: 'Red'}}>{`Error ${fetchError}`}</p>
        }
        { 
          fetchError && !IsLoading && <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />

        }

      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
