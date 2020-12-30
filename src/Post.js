import cross from './cross.jpg'
import pencil from './pencil.jpg'
import { useParams } from 'react-router-dom';
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    useHistory,
    //useParams
  } from "react-router-dom";

  function Post(props) {

        // async componentDidMount() {
        //     this.setState(state => ({ waitSpinner: true }));
        //     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        //    try {
        //         const response = await axios.get(apiUrl);
        //         const posts = response.data ;
        //         this.setState(state => ({posts: posts, waitSpinner: false }));
        //        } catch (error) {
        //            console.error(error);
        //        }   
        //  }
        const { waitSpinner, posts, history } = props;
        console.log('history', history);
                //let { id } = useParams();

                // let title = posts.find(item => item.id === +id).title;
                // let body = posts.find(item => item.id === +id).body;
        return ( 
            <div className="App">
            <header className="App-header">
                <Link to="/" ><p>go home</p></Link>
                <div className="stylePosts">
                    {/* <div className="control">
                        <img onClick={() => props.changePost(+id)} className="pencil" alt="pencil" src={pencil} />
                        <img onClick={() => props.deletePost(+id)} className="cross" alt="cross" src={cross} />
                    </div> */}
                    <h1>HEEEE</h1>
                    <p>DEEEEEEEEEEE</p> 
                </div>
            </header>    
            </div>
       
         )
    }    

export default Post;