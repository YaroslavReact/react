import React, { Component } from 'react'


export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "off", 
            label: "Нажми"
        };
        this.press = this.press.bind(this);
        console.log("constructor 1")
      }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps() 2");
    }
    componentWillMount(){
        console.log("componentWillMount() 3");
    }
    componentDidMount(){
        console.log("componentDidMount() 4");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount() 8");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate() 5");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate() 6");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate() 7");
    }
    render() {
        console.log("render ")
        return (
             <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
        )
    }
}

