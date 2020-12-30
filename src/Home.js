import React, { Component } from 'react'
import axios from 'axios'
// import  Example  from './Example';
import  PostsDisplay  from './Posts';
import Post from './Post';
import './App.css';
import PopupChangePost from './PopupChangePost';
import DeletePost from './DeletePost';
import PopupAddPost from './PopupAddPost';


  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          class: "off", 
          addLabel: "Add Me",
          hide: false,
          popupAddPost: false,
          posts: [],
          waitSpinner: false,
          popupChangePost: false,
          popupDelete: false,
          changePostId: "",
          deleteId: ''
      };
      this.addPost = this.addPost.bind(this);
      this.closePopup = this.closePopup.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changePost = this.changePost.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.deletePost = this.deletePost.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }
    async componentDidMount(){
      this.setState(state => ({ waitSpinner: true }));
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
         try {
              const response = await axios.get(apiUrl);
              const posts = response.data ;
              this.setState(state => ({posts: posts, waitSpinner: false }));
             } catch (error) {
                 console.error(error);
             }   
     }
    addPost(){
     this.setState(state => ({ popupAddPost: true}))
    }
    changePost(postId){
    }
    async handleChange(changePost){
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
        this.setState(state => ({posts: state.posts.map(item => (item.id === changePost.id) ? changePost: item)}));
        this.closePopup();
      } catch (error) {
        console.error(error);
      } 
    } 
    async handleSubmit(addFormValue){
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
            const posts = this.state.posts.concat(addFormValue);
            this.setState(state => ({posts: posts}));
            this.closePopup()
          } catch (error) {
              console.error(error);
          }   
    }
    async handleDelete(){
      console.log('hist', this.props.history)
      const {  deleteId } = this.state;
      const deleteButton = document.getElementById("deleteButton");
      deleteButton.setAttribute("class" , "ui button loading");
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      const event = new Event("click")
  
      try {
        const response = await axios.delete(apiUrl + "/" + deleteId);
        deleteButton.removeAttribute("class"); 
        this.setState(state => ({posts: state.posts.filter(item => item.id !== deleteId) }));
        this.closePopup();
      } catch (error) {
        console.error(error);
      } 
    }        
    deletePost(postId){
      this.setState(state => ({deleteId: postId, popupDelete: true}));
    }
    closePopup(){
      this.setState(state => ({ popupAddPost: false, popupChangePost: false, popupDelete: false }))
    }

    render (){
      const { addLabel,waitSpinner,posts,popupAddPost,popupChangePost,changePostId,popupDelete } = this.state
      return(
      <div className="App">
        <header className="App-header"> 
            {popupAddPost && <PopupAddPost 
              handleSubmit={this.handleSubmit} 
              closePopup={this.closePopup} 
              addLabel={addLabel}
              popupAddPost={popupAddPost}
            />}
            {popupChangePost && (
              <PopupChangePost
                closePopup={this.closePopup} 
                handleChange={this.handleChange}
                popupChangePost={popupChangePost}
                changePostId={changePostId}
                posts={posts}
              />
             )}
             {popupDelete && <DeletePost 
                popupDelete={popupDelete}
                closePopup={this.closePopup}
                handleDelete={this.handleDelete}
             />}
            <PostsDisplay 
                waitSpinner={waitSpinner} 
                posts={posts} 
                changePost={this.changePost}
                deletePost={this.deletePost}
                addPost={this.addPost}
                addLabel={this.state.addLabel}
            />
        </header>
      </div>
      )
    };
  }
  
  export default Home;