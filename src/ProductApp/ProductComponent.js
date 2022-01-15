import React, { Component } from 'react';
import ProductForm from './ProductForm';
import ProductService from './ProductService';
import AlertModal from './AlertModal'
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            message: '',
            showForm: false,
            product: {
                productId: '',
                productName: '',
                quantityOnHand: '',
                price: '',
            },
            modalShow: false
        }
        this.refreshProducts = this.refreshProducts.bind(this);
    }
    componentDidMount() {
        this.refreshProducts();
    }
    refreshProducts() {
        ProductService.retrieveAllProducts().then(
            response => {
                console.log(`refresh product called`);
                console.log(response.data)
                this.setState({
                    products: response.data
                })
            }
        )
    }
    removeProduct(productId) {
        console.log(productId + ' to be deleted');
        ProductService.deleteProduct(productId).then(
            response => {
                console.log(response, productId)
                this.setState({
                    message: `${productId} is deleted successfully!`,
                    modalShow: true
                }, this.refreshProducts())
            }
            

        )
        this.setModalShow(true)

    }
    onAddProduct(temp, product) {
        this.setState({
            showForm: temp,
            product: product,
        });
    }
    setModalShow(t){
        this.setState({
            modalShow: t
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <AlertModal
                        show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                        message={this.state.message}
                    />
                </div>
                <div class='container mt-3' style={{ width: 200 }}>
                    <button className='btn btn-primary' onClick={() => this.onAddProduct(true, { productId: '', productName: '', quantityOnHand: '', price: '' })}>Add Product</button>

                </div>
                {this.state.showForm ? <div >
                    <ProductForm closeAddProduct={() => this.onAddProduct()} product={this.state.product} refresh={this.refreshProducts}></ProductForm>
                </div> :
                    <div className='container mt-5'>
                        <div className='table'>
                            <table className="table table-dark table-striped">

                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Quantity On Hand</th>
                                    <th>Product Price</th>
                                    <th>Delete</th>
                                    <th>Action</th>
                                </tr>

                                <tbody>
                                    {
                                        this.state.products.map(
                                            (product) =>
                                                <tr key={product.productId}>
                                                    <td >{product.productId}</td>
                                                    <td>{product.productName}</td>
                                                    <td>{product.quantityOnHand}</td>
                                                    <td>{product.price}</td>
                                                    <td><button className='btn btn-danger' onClick={() => this.removeProduct(product.productId)} >Delete</button></td>
                                                    <td>
                                                        <button className='btn btn-success' onClick={() => this.onAddProduct(true, product)}>Update</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>}

            </React.Fragment>
        );
    }
}
export default ProductComponent;
