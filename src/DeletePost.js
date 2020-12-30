import React, { Component } from 'react'
import cross from './cross.jpg'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

    export default function DeletePost(props){
        return (
            <div className="popup"> 
                <div onClick={() => props.closePopup()} className="popupBody"></div>
                    <div className="popupContent">
                        <div className="popupHeader">
                            <img onClick={() => props.closePopup()} className="cross" alt="cross" src={cross} /> 
                        </div>
                        <div className="popupDelete">
                            <h1>Are you sure you want to delete this post?</h1>
                            <Button onClick={() => props.handleDelete()} id="deleteButton" >
                                DELETE
                            </Button>
                            {/* <button onClick={() => props.handleDelete()} className="deleteButton">
                                DELETE
                            </button>   */}
                    </div>
                </div>
            </div>
        )
}
