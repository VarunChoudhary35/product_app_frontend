import React, { Component } from 'react';

class CityComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            temperature : 30,
            isUserLoggedIn : false
        }
        this.changeTemp=this.changeTemp.bind(this);
        this.changeButton=this.changeButton.bind(this);

    }
    changeTemp(){
        this.setState({
            temperature : 20
        })
        this.props.changeCity();
    }
    changeButton(){
        this.setState({
            isUserLoggedIn : !this.state.isUserLoggedIn
        })
        this.props.changeCity();
    }
    render() {
        let buttonMessage
        if (this.state.isUserLoggedIn){
            buttonMessage = 'Logout'
        }
        else{
            buttonMessage = 'Login'
        }
        return (
            <div>
                <h1>{this.props.cityName} has: {this.state.temperature} temperature</h1>
                <button onClick={this.changeTemp}>Change City</button>
                <br/><hr/><br/>
                <button onClick={this.changeButton}> {buttonMessage} </button>
                <h1>using ternar : {this.state.isUserLoggedIn ? <button onClick={this.changeButton}>Logout</button> : <button onClick={this.changeButton}>Login</button>} </h1>
                <h1>using short circuit approach : { this.state.isUserLoggedIn && <button>Welcome Admin!</button> } </h1>
            </div>
        );
    }
}

export default CityComponent;