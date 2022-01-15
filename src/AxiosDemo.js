import React, { Component } from 'react';
import axios from 'axios'
class AxiosDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Nothing'
        }
        this.changeData = this.changeData.bind(this);
    }
    changeData() {
        console.log('change data called');
        axios.get("http://localhost:9090/product/1").then(response => {
            console.log(response.data)
            this.setState({
                data: response.data.productName
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <h4>your data is : {this.state.data}</h4>
                <button onClick={this.changeData.bind(this)}>Go</button>
            </React.Fragment>
        );
    }
}

export default AxiosDemo;