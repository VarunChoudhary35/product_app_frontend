import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            message: "WELCOME GUEST USER",
            counter: 0
        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    changeMessage2(){
        this.setState({
            message : "WELCOME ADMIN 2",
            counter : this.state.counter+1
        })
    }

    render() {
        return (
            <div>
                <h2>THe message is : {this.state.message}</h2>
                <button onClick={ () => this.changeMessage2()}>Change - binding in render method</button>
            </div>
        );
    }
}

LifeCycle.propTypes = {

};

export default LifeCycle;