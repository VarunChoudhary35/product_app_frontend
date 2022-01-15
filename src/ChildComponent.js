import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hi this is Child Component - {this.props.myDataProp}</h1>
                <button onClick={this.props.updateParentStateData}>Change city</button>
                <h2>trainer name : {this.props.trainerName}</h2>
            </div>
        );
    }
}

export default ChildComponent;