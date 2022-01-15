import { Route,BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
//import Welcome from './Welcome'
//import Employee from './Employee'
import App from './App'
//import User from './User'
//import LifeCycle from './LifeCycle'
//import ParentComponent from './ParentComponent'
//import WeatherComponent from './WeatherComponent'
import FormDemo from './FormDemo'
import CompleteForm from './CompleteForm'
//import AxiosDemo from './AxiosDemo'
import CustomerList from './CustomerList'
import React from 'react'
import ProductComponent from './ProductApp/ProductComponent'
import ProductForm from './ProductApp/ProductForm'

ReactDom.render(
  <BrowserRouter>
    <React.Fragment>
      <Route path='/' component={App}></Route>
      <Route path='/registration' component={CompleteForm}></Route>
      <Route path='/login' component={FormDemo}></Route>
      <Route path='/product' component={ProductComponent}></Route>
      <Route path='/productform' component={ProductForm}></Route>
    </React.Fragment>
  </BrowserRouter>,
    document.getElementById("maybank")
)
/* ReactDom.render(
  <p>
    <CustomerList></CustomerList>
    <AxiosDemo></AxiosDemo>
    <CompleteForm></CompleteForm>
    <FormDemo></FormDemo>
    <Welcome></Welcome>
    <h1>Hello Employees details are :</h1>
    <Employee name="varun" id="101" salary="66666"></Employee>
    <User username="cocaine" password="12345678"></User>
    <LifeCycle></LifeCycle>
    <ParentComponent></ParentComponent>
    <hr/>
    <WeatherComponent></WeatherComponent>
  </p>
  ,
  document.getElementById("maybank")
)
/* import React from 'react'
import ReactDOM from 'react-dom'
function index(){
  const element=(
    <div>
      <h1>Welcome To MayBAnk</h1>
      <h2>It is : {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element,document.getElementById("maybank"))
}
setInterval(index,1000)
 */
/* import React from 'react'
import ReactDOM from 'react-dom'
import ReactDom from 'react-dom';
import ParentComponent from './ParentComponent';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date : new Date()
    }
  }
  componentDidMount(){
    this.timerId=setInterval(() => this.changeTme(),1000)
  }
  changeTme(){
    this.setState({
      date : new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>{this.props.timeZone} : {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
  }

export default Clock;
ReactDOM.render(
  <h1>
    <Clock timeZone="India"></Clock>
  
  </h1>,document.getElementById("maybank")
) */
/* funcReact.Componentla
context(props)
}yClock(){
  ReactDOM.render(
    <h1>
      <Clock timeZone="India" date={ new Date() }></Clock>
      <Clock timeZone="USA" date={ new Date() }></Clock>
      <Clock timeZone="Germany" date={ new Date() }></Clock>
    </h1>,document.getElementById("maybank")
  )
}
setInterval(displayClock,1000) */ 