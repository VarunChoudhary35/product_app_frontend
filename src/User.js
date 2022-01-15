import render from 'dom-serializer';
import React from 'react'
export default class User extends React.Component{
    constructor(){
        super();
        this.state={
            message: "WELCOME GUEST USER",
            counter: 0
        }
        this.changeMessage1=this.changeMessage1.bind(this);
    }
    render(){
        const{username,password} = this.props;
        const{counter,message} = this.state;
        return <h2>
            Hi User, your Name is : {username}
            <p> Password: {password}</p>
            <p> {counter}</p>
            <p> {message}</p>
            <button onClick={this.changeMessage1}>Change - binding in constructor</button>
            <button onClick={() => this.changeMessage2()}>Change - binding using arow function</button>
            <button onClick={this.changeMessage3.bind(this)}>Change - binding in render method</button>
            <button onClick={this.changeMessage4}>Change - binding in as arrow function </button>

        </h2>
    }
    changeMessage1(){
        this.setState({
            message : "WELCOME ADMIN 1",
            counter : this.state.counter+1
        })
    }
    changeMessage2(){
        this.setState({
            message : "WELCOME ADMIN 2",
            counter : this.state.counter+1
        })
    }
    changeMessage3(){
        this.setState({
            message : "WELCOME ADMIN 3",
            counter : this.state.counter+1
        })
    }
    changeMessage4 = () => {
        this.setState({
            message : "WELCOME ADMIN 4",
            counter : this.state.counter+1
        })
    }
}
