import axios from 'axios'
const PRODUCT_API_URL = 'https://product-app-101.herokuapp.com/product';
class ProductService {
    retrieveAllProducts(){
         return axios.get(`${PRODUCT_API_URL}`,{headers: {'Access-Control-Allow-Origin': 'true'}});
    }
    deleteProduct(productId){
        return axios.delete(`${PRODUCT_API_URL}/${productId}`,{headers: {'Access-Control-Allow-Origin': 'true'}})
    }
    addProduct(values){
        return axios.post(`${PRODUCT_API_URL}`,values,{headers: {'Access-Control-Allow-Origin': 'true'}});
    }
    updateProduct(values){
        return axios.put(`${PRODUCT_API_URL}`,values,{headers: {'Access-Control-Allow-Origin': 'true'}});
    }
}
export default new ProductService();
