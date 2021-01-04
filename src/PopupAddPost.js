import React, { useState } from 'react'
import cross from './cross.jpg'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

export default function PopupAddPost(props) {
    const [newPost, setNewPost] = useState({ 
        title: '',
        body: '',
        userId: "101",
        id: "123"
     });
    function handleChangeTitle(event) {
        setNewPost( prevState => ({
            ...prevState,
            title: event.target.value 
        }));
     }
    function handleChangeBody(event) {
        setNewPost( prevState => ({
            ...prevState,
            body: event.target.value 
        }));
     }
    function createPost(e){
        e.preventDefault();
        props.handleSubmit(newPost)
    } 
    const { closePopup } = props
    return (
        <div className="popup"> 
            <div onClick={() => closePopup()} className="popupBody"></div>
            <div className="popupContent">
                <div className="popupHeader">
                    <img onClick={() => closePopup()} className="cross" alt="cross" src={cross} />
                </div>
                <div className="popupForm">
                    <form onSubmit={createPost}>
                        <p>Enter title</p>
                        <textarea onChange={handleChangeTitle} className="textarea"/>
                        <p>Enter body</p>
                        <textarea onChange={handleChangeBody} className="textarea"/>
                        <Button type="submit" id="addButton" >
                            Add Me
                        </Button>
                    </form>
                </div>
            </div>
        </div>  
    )
}
