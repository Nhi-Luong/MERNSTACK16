import * as ActionTypes from "../actionTypes"
import axios from "axios"

export const AddProductToStore = (newProduct)=>{
    return{
        type: ActionTypes.AddProductToStore,
        payload : newProduct
    }
}

export const saveProductToDB = (product)=>{
    return(dispatch)=>{
        axios.post("http://localhost:9000/product/saveProduct", product).then((savedProduct)=>{
            let  productData = savedProduct.data;
            dispatch(AddProductToStore(productData))
        }).catch(()=>{
            console.log("error saveProductToDB")
        })
    }
}

