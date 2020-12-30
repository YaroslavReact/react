import React, { Component } from 'react'
import cross from './cross.jpg'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

export default class PopupAddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTitle: '',
            valueBody: '',
            newPost:{
                title: "",
                body: '',
                userId: "",
                id: ""
            }
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.createPost = this.createPost.bind(this);
    }
    handleChangeTitle(event) {
        this.setState({valueTitle: event.target.value});
     }
    handleChangeBody(event) {
        this.setState({valueBody: event.target.value});
     }
    createPost(e){
        const { valueTitle,valueBody,newPost } = this.state 
        e.preventDefault();
        this.setState(state => ({newPost: {
            title: valueTitle,
            body: valueBody,
            userId: 101,
            id: 123
        }}), () => this.props.handleSubmit(newPost));      
    }
       
    render() {
        const { closePopup,addLabel } = this.props
        return (
            <div className="popup"> 
                <div onClick={() => closePopup()} className="popupBody"></div>
                    <div className="popupContent">
                        <div className="popupHeader">
                            <img onClick={() => closePopup()} className="cross" alt="cross" src={cross} />
                            </div>
                            <div className="popupForm">
                        <form onSubmit={this.createPost}>
                            <p>Enter title</p>
                            <textarea onChange={this.handleChangeTitle.bind(this)} className="textarea"/>
                            <p>Enter body</p>
                            <textarea onChange={this.handleChangeBody.bind(this)} className="textarea"/>
                            <Button type="submit" id="addButton" >
                                {addLabel}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>    
        )
    }
}
