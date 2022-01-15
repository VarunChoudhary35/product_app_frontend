import React, { Component } from 'react';

class FormDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.displayDetails=this.displayDetails.bind(this);
    }
    handleChange(data){
        console.log('change handler called : '+data.target.value);
        this.setState({
            username : data.target.value
        })
    }
    displayDetails(event){
        console.log('display details called  ');

        alert('The username is : '+this.state.username)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.displayDetails}>
                    <label>Username : </label>
                    <input type = 'text' onChange={this.handleChange}></input>
                
                <br/>
                <label>
                        Pick your favorite  flavor:
                        <select  onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                </label>
                <br/>
                <input type = 'submit' value='Go'></input>
                </form>

                
            </div>
        );
    }
}

export default FormDemo;