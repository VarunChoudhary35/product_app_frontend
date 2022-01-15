import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import ProductComponent from './ProductComponent';
import ProductService from './ProductService';
import AlertModal from './AlertModal'

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow:false,
            productId: '',
            productName: '',
            quantityOnHand: '',
            price: '',
            msg: ''
        }
        
        this.onSubmitAdd = this.onSubmitAdd.bind(this);
        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
    }

    onSubmitAdd(values){
        
        console.log(values)
        ProductService.addProduct(values).then(
            response => {
                console.log(response); 
                this.setState({
                    msg: response.data,
                    modalShow: true
                })               
                
            },this.setModalShow(true))
        
    }
    onSubmitUpdate(values){
        ProductService.updateProduct(values).then(
            response => {
                console.log(response);
                this.setState({
                    msg: response.data,
                    modalShow: true
                })
            },this.setModalShow(true))

    }
    backHandler = () => {
        this.props.closeAddProduct(false,{})
        this.props.refresh()
    }
    setModalShow(t){
        this.setState({
            modalShow: t
        })
        if (t==false){
            this.backHandler()
        }

    }
    render() {
        let {product } = this.props;
        return (
            <div className='container mt-5'>
                {this.state.message && <div className='alert alert-success'>{this.state.message}</div>}
                <div>
                    <AlertModal
                        show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                        message={this.state.msg}
                    />
                </div>

                <Formik
                    initialValues={product}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={this.validateProductForm}
                    enableReinitialize={true}
                    onSubmit={product.productId==''?this.onSubmitAdd:this.onSubmitUpdate}
                >

                    <Form>
                        <fieldset className='form-group'>
                            <label>Produt Id :</label>
                            <Field className='form-control' type='text' name='productId'  ></Field>
                        </fieldset>
                        <fieldset className='form-group'>
                            <label>Product Name :</label>
                            <Field className='form-control' type='text' name='productName' ></Field>
                        </fieldset>
                        <fieldset className='form-group'>
                            <label>Quantity On Hand :</label>
                            <Field className='form-control' type='text' name='quantityOnHand' ></Field>
                        </fieldset>
                        <fieldset className='form-group'>
                            <label>Price :</label>
                            <Field className='form-control' type='text' name='price' ></Field>
                        </fieldset>
                        <div class='container'>
                            {product.productId==''?<button className="btn btn-success" type="submit" id="add" name="add"> Add Product</button>:
                            <button className="btn btn-success" type="submit" id="update" name="update"> Update Product</button>}
                            <br></br><br></br>
                            <button className="btn btn-dark" type="button" onClick={this.backHandler}> Back </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default ProductForm;