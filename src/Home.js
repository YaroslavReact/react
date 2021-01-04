import React, { useState,useEffect } from 'react'
import axios from 'axios'
import  Posts  from './Posts';
import './App.css';
import PopupChangePost from './PopupChangePost';
import DeletePost from './DeletePost';
import PopupAddPost from './PopupAddPost';

  function Home(props) {
      const [popupAddPost, setPopupAddPost] = useState(false);
      const [posts, setPosts] = useState([]);
      const [waitSpinner, setWaitSpinner] = useState(false);
      const [popupChangePost, setPopupChangePost] = useState(false);
      const [popupDelete, setPopupDelete] = useState(false);
      const [changePostId, setChangePostId] = useState('');
      const [deleteId, setDeleteId] = useState('');
    useEffect(() => {
      setWaitSpinner(true);
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
         try {
              const response = axios.get(apiUrl);
              response.then((value) => setPosts(value.data));
              setWaitSpinner(false)
             } catch (error) {
                 console.error(error);
             }   
    }, [ ] )
    function addPost(){
      setPopupAddPost(true);
    }
    function changePost(postId){
      setPopupChangePost(true);
      setChangePostId(postId);
    }
    async function handleChange(changePost){
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      const changeButton = document.getElementById("changeButton");
      changeButton.setAttribute("class" , "ui button loading");
      try {
        const response = await axios.patch(apiUrl + "/" + changePost.id,{  
        "title": changePost.title,
        "body": changePost.body,
        "userId": changePost.userId,
        "id": changePost.id
      });
        changeButton.removeAttribute("class");
        setPosts(state => (state.map(item => (item.id === changePost.id) ? changePost: item)));
        closePopup();
      } catch (error) {
        console.error(error);
      } 
    } 
    async function handleSubmit(addFormValue){
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      const addButton = document.getElementById("addButton");
      addButton.setAttribute("class" , "ui button loading");
      try {
            const response = await axios.post(apiUrl,{  
              "title": addFormValue.title,
              "body": addFormValue.body,
              "userId": addFormValue.userId,
              "id": Date.now()
            });
            addButton.removeAttribute("class"); 
            const NewPosts = posts.concat(addFormValue);
            setPosts(NewPosts)
            closePopup()
          } catch (error) {
              console.error(error);
          }   
    }
    async function handleDelete(){
      const deleteButton = document.getElementById("deleteButton");
      deleteButton.setAttribute("class" , "ui button loading");
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
      try {
        const response = await axios.delete(apiUrl + "/" + deleteId);
        deleteButton.removeAttribute("class"); 
        setPosts(state => (state.filter(item => item.id !== deleteId)));
        closePopup();
      } catch (error) {
        console.error(error);
      } 
    }        
    function deletePost(postId){
      setDeleteId(postId);
      setPopupDelete(true);
    }
    function closePopup(){
      setPopupAddPost(false);
      setPopupChangePost(false);
      setPopupDelete(false);
    }
    return(
      <div className="App">
        <header className="App-header"> 
            {popupAddPost && <PopupAddPost 
              handleSubmit={handleSubmit} 
              closePopup={closePopup} 
              popupAddPost={popupAddPost}
            />}
            {popupChangePost && (
              <PopupChangePost
                closePopup={closePopup} 
                handleChange={handleChange}
                changePostId={changePostId}
                posts={posts}
              />
             )}
             {popupDelete && <DeletePost 
                closePopup={closePopup}
                handleDelete={handleDelete}
             />}
            <Posts 
                waitSpinner={waitSpinner} 
                posts={posts} 
                changePost={changePost}
                deletePost={deletePost}
                addPost={addPost}
            />
        </header>
      </div>
    )
  }
  
  export default Home;