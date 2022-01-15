import React, { Component } from 'react';

class DisplayCustomer extends Component {
    render() {
        const { customer } = this.props;
        return (
            <React.Fragment>
                <h3>CustomerId={customer.customerId}, CustomerName={customer.customerName}, CustomerAddress={customer.customerAddress}, Bill={customer.customerBill}</h3>
            </React.Fragment>
        );
    }
}

export default DisplayCustomer;