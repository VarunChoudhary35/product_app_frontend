import React, { Component } from 'react';
import DisplayCustomer from './DisplayCustomer';

class CustomerList extends Component {
    render() {
        const customerData = [
            {
                customerId : 101,
                customerName : "AKASH",
                customerAddress : "Jhansi",
                customerBill : 2000
            },
            {
                customerId : 102,
                customerName : "Rakesh",
                customerAddress : "Jaipur",
                customerBill : 5000
            },
            {
                customerId : 103,
                customerName : "Priyanshi",
                customerAddress : "Agra",
                customerBill : 5999
            }
        ]
        return (
            <React.Fragment>
                <h1>
                    {   
                        customerData.map( currentCustomer => <DisplayCustomer key = {currentCustomer.customerId} customer={currentCustomer}></DisplayCustomer> )
                    }
                </h1>
            </React.Fragment>
        );
    }
}

export default CustomerList;