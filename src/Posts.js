import React, { Component } from 'react'
import logo from './logo.svg';
import cross from './cross.jpg'
import pencil from './pencil.jpg'
import { Link } from "react-router-dom";

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "Нажми меня" 
        };
      }
    
 
    render() {
        const { waitSpinner, posts,addPost,addLabel } = this.props;
        return (
            <div>
                {waitSpinner && <img src={logo} className="App-logo" alt="logo" />}
                <div>
                    <p>Hello World! Todo List Wait For You!</p>
                    <button onClick={this.addPost} className="addButton">
                        {addLabel}
                    </button>
                </div>
                    {posts.map(post => (
                       
                            <div className="styleArticle">
                                 <div className="stylePosts" key={post.id}>
                                    <div className="control" >
                                        <img onClick={() => this.props.changePost(post.id)} className="pencil" alt="pencil" src={pencil} /> {/*document.event.stopPropagation(), */}
                                        <img onClick={() => this.props.deletePost(post.id)} className="cross" alt="cross" src={cross} />
                                    </div>
                                    <Link to={"/posts/" + post.id }  >
                                        <h1>{post.title}</h1>
                                        <p>{post.body}</p>
                                    </Link>
                                </div>
                            </div>
                        
                    ))}
                
            </div>
        )
    }
}
