import React, { Component } from 'react'
import cross from './cross.jpg'
import { Button } from 'semantic-ui-react'

export default class PopupChangePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTitle: '',
            valueBody: '',
            changePost:{
                title: "",
                body: '',
                userId: "",
                id: '',
            }
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChangeTitle(event) {
        this.setState({valueTitle: event.target.value});
     }
    handleChangeBody(event) {
        this.setState({valueBody: event.target.value});
     }
    handleChange(e){
        const { posts,changePostId,handleChange } = this.props
        const { valueTitle,valueBody } = this.state
        e.preventDefault();
        Array.isArray(posts) ? this.setState(state => ({changePost: {
            title: valueTitle,
            body: valueBody,
            userId: posts.find(item => item.id === changePostId).userId,
            id: posts.find(item => item.id === changePostId).id
        }}), () => handleChange(this.state.changePost)) : this.setState(state => ({changePost: {
            title: valueTitle,
            body: valueBody,
            userId: posts.UserId,
            id: posts.id
        }}), () => handleChange(this.state.changePost));      
    }
    componentWillMount(){
        const { posts,changePostId } = this.props
        console.log( Array.isArray(posts))
        Array.isArray(posts) ? this.setState(state =>({
            valueTitle: posts.find(item => item.id === changePostId).title,
            valueBody: posts.find(item => item.id === changePostId).body
        })): this.setState(state =>({ 
            valueTitle: posts.title,
            valueBody: posts.body
        }));
    }   
    render() { 
        const { closePopup } = this.props
        return (
            <div className="popup"> 
                <div onClick={() => closePopup()} className="popupBody"></div>
                    <div className="popupContent">
                        <div className="popupHeader">
                            <img onClick={() => closePopup()} className="cross" alt="cross" src={cross} />
                        </div>
                        <div className="popupForm">
                            <form onSubmit={this.handleChange}>
                                <p>Enter title</p>
                                <textarea value={this.state.valueTitle} onChange={this.handleChangeTitle.bind(this)} className="textarea"/>
                                <p>Enter body</p>
                                <textarea value={this.state.valueBody} onChange={this.handleChangeBody.bind(this)} className="textarea"/>
                                <Button type="submit" id="changeButton" >
                                    Change Me
                                </Button>
                            </form>
                        </div>
                 </div>
            </div>    
        )
    }
}

