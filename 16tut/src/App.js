import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import Home from "./Home";
import {BrowserRouter, Route, Routes, useHistory} from 'react-router-dom';
import { useState,useEffect } from "react";
import About from "./About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/post" element = {<NewPost/>}/>
          <Route path="/post/:id" element = {<PostPage/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="*" element = {<Missing/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
