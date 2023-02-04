import { createContext,useState,useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts';
import EditPosts from '../EditPosts';
import useWindowSize from '../Hooks/useWindowSize';
import useAxiosFetch from '../Hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle,setEditTitle] = useState('');
    const [editBody,setEditBody] = useState('');
    const history = useHistory();
    const {width} = useWindowSize();

    const  {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500'); 

  useEffect(()=>{
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts');
        setPosts(response.data);
      }catch (err){
          if(err.response){
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
          } else{
            console.log(err.message);
          }
      }
    }
    fetchPosts();
  },[])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try{
      const response = await api.post('/posts',newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      history.push('/');
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleEdit = async (id)=> {
    const datetime = format(new Date(), 'MMMM dd,yyyy pp');
    const updatedPost = { id, title: postTitle, datetime, body: postBody };
    try{
      const response = await api.put(`/posts/${id}`,updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data}:post));
      setEditTitle('');
      setEditBody('');
      history.push('/');
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      history.push('/');
    } catch (err) {
      console.log(err.message);
    }
  }
    return(
        <DataContext.Provider value={{
                width,search,setSearch,searchResults,fetchError,isLoading
        }}
        >
            {children}

        </DataContext.Provider>
    )
}

export default DataContext;