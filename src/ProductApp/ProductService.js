import axios from 'axios'
const PRODUCT_API_URL = 'http://product-app-101.herokuapp.com/product';
class ProductService {
    retrieveAllProducts(){
         return axios.get(`${PRODUCT_API_URL}`);
    }
    deleteProduct(productId){
        return axios.delete(`${PRODUCT_API_URL}/${productId}`)
    }
    addProduct(values){
        return axios.post(`${PRODUCT_API_URL}`,values);
    }
    updateProduct(values){
        return axios.put(`${PRODUCT_API_URL}`,values);
    }
}
export default new ProductService();
