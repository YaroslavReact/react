import React,{ useEffect,useState } from 'react'
import cross from './cross.jpg'
import { Button } from 'semantic-ui-react'

export default function PopupChangePost(props) {
    const [changePost, setChangePost] = useState({
        title: '',
        body: '',
        userId: '',
        id: '',
    });
    function handleChangeTitle(event) {
        setChangePost( prevState => ({
            ...prevState,
            title: event.target.value 
        }));
        defineId()
     }
    function handleChangeBody(event) {
        setChangePost( prevState => ({
            ...prevState,
            body: event.target.value 
        }));
        defineId()
     }
    function handleChange(event){
        const { handleChange } = props
        event.preventDefault();
        handleChange(changePost)      
    }
    function defineId(){
        const { posts,changePostId } = props
        if( Array.isArray(posts)){ 
            setChangePost( prevState => ({
                ...prevState,
                userId: posts.find(item => item.id === changePostId).userId
            }));
            setChangePost( prevState => ({
                ...prevState,
                id: posts.find(item => item.id === changePostId).id 
            }));
        }else {
            setChangePost( prevState => ({
                ...prevState,
                userId: posts.UserId
            }));
            setChangePost( prevState => ({
                ...prevState,
                id: posts.id 
            }));
        } 
    }
    useEffect(() => {
        const { posts,changePostId } = props
        console.log( Array.isArray(posts))
        if (Array.isArray(posts)) { 
            setChangePost( prevState => ({
                ...prevState,
                title: posts.find(item => item.id === changePostId).title
            }));
            setChangePost( prevState => ({
                ...prevState,
                body: posts.find(item => item.id === changePostId).body
            }));
        }else {
            setChangePost( prevState => ({
                ...prevState,
                body: posts.title
            }));
            setChangePost( prevState => ({
                ...prevState,
                body: posts.body
            }));
        }
    }, [ ] )
    
    const { closePopup } = props
        return (
            <div className="popup"> 
                <div onClick={() => closePopup()} className="popupBody"></div>
                    <div className="popupContent">
                        <div className="popupHeader">
                            <img onClick={() => closePopup()} className="cross" alt="cross" src={cross} />
                        </div>
                        <div className="popupForm">
                            <form onSubmit={handleChange}>
                                <p>Enter title</p>
                                <textarea value={changePost.title} onChange={handleChangeTitle} className="textarea"/>
                                <p>Enter body</p>
                                <textarea value={changePost.body} onChange={handleChangeBody} className="textarea"/>
                                <Button type="submit" id="changeButton" >
                                    Change Me
                                </Button>
                            </form>
                        </div>
                 </div>
            </div>    
        )
    
}

