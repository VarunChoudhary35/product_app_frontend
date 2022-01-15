import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      data : 'Bangalore'
    }
    this.parentMessage=this.parentMessage.bind(this);
  }
  parentMessage(){
    this.setState({
      data : 'Hyderabad'
    })
  }
  render() {
    return (
      <div>
        <h1>This is Parent Component - {this.state.data}</h1> 
        <ChildComponent 
        trainerName='Akash'
        updateParentStateData={this.parentMessage}
        myDataProp={this.state.data}>
        </ChildComponent>
      </div>
    );
  }
  }
  export default ParentComponent;
