import React, { Component } from 'react';
import CityComponent from './CItyComponent';

class WeatherComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            city: 'Bangalore'
        }
        this.changeCity=this.changeCity.bind(this);
    }
    changeCity(){
        this.setState({
            city : 'Hyderabad'
        })
    }
    render() {
        return (
            <div>
                <CityComponent
                cityName={this.state.city}
                changeCity={this.changeCity}
                ></CityComponent>
            </div>
        );
    }
}

export default WeatherComponent;