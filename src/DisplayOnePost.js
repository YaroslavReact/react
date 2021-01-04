import React from 'react';
import logo from './logo.svg';
import cross from './cross.jpg';
import pencil from './pencil.jpg';
import {Link} from "react-router-dom";

export default function DisplayOnePost(props) {
    const { post,waitSpinner } = props;
    return (
        <div>
            
            <Link to="/" ><p>go home</p></Link>
            <div className="stylePosts">
                <div className="control">
                    <img onClick={() => props.changePost()} className="pencil" alt="pencil" src={pencil} />
                    <img onClick={() => props.deletePost()} className="cross" alt="cross" src={cross} />
                </div>
                {waitSpinner && <img src={logo} className="App-logo" alt="logo" />} 
                <h1>{post.title}</h1>
                <p>{post.body}</p> 
            </div>
        </div>        
    )
};