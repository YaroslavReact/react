import axios from 'axios';
import React, { Component,useState } from 'react';
import DisplayOnePost from './DisplayOnePost';
import PopupChangePost from './PopupChangePost';
import DeletePost from './DeletePost';
import {
    useHistory,
    useParams
  } from "react-router-dom";

  function Post(props) {
        const [post, setPost] = useState({
            title: "",
            body: '',
            userId: "",
            id: '',
        });
        const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
        const [popups, setPopups] = useState({ popupChangePost: false, popupDelete: false });
        const [waitSpinner, setWaitSpinner] = useState(false);
        let history = useHistory();
        let { id } = useParams();
        
        React.useEffect(() => {
            setWaitSpinner(true)
           try {
                const response = axios.get(url + '/' + id);
                response.then((value) => setPost(value.data));
                setWaitSpinner(false);
               } catch (error) {
                   console.error(error);
               } 
                 
         },[id]);
        function deletePost(){
            setPopups({ popupDelete: true });
          }
        function changePost(){
            setPopups({ popupChangePost: true });
          }
        async function handleDelete(){
            const deleteButton = document.getElementById("deleteButton");
            deleteButton.setAttribute("class" , "ui button loading");
  
            try {
                const response = await axios.delete(url + "/" + post.id);
                deleteButton.removeAttribute("class"); 
                closePopup();
                history.push('/');
            } catch (error) {
                console.error(error);
            } 
         }
        async function handleChange(changePost){
            const changeButton = document.getElementById("changeButton");
            changeButton.setAttribute("class" , "ui button loading");
            try {
              const response = await axios.patch(url + "/" + post.id,{  
              "title": changePost.title,
              "body": changePost.body,
              "userId": changePost.userId,
              "id": changePost.id
            });
              changeButton.removeAttribute("class");
              setPost(changePost);              
              closePopup();
            } catch (error) {
              console.error(error);
            } 
          }  
        function closePopup(){
            setPopups({ popupChangePost: false, popupDelete: false });
          }       
        return ( 
            <div className="App">
            <header className="App-header">
                {popups.popupChangePost && (
                    <PopupChangePost
                        closePopup={closePopup} 
                        handleChange={handleChange}
                        changePostId={post.id}
                        posts={post}
                    />
                )}
                {popups.popupDelete && <DeletePost 
                    closePopup={closePopup}
                    handleDelete={handleDelete}
                />}
                <DisplayOnePost
                    waitSpinner={waitSpinner} 
                    post={post}
                    changePost={changePost}
                    deletePost={deletePost}
                />
            </header>    
            </div>
       
         )
    }    

export default Post;