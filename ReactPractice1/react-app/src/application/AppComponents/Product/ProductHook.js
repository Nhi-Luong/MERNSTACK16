import React, {useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddProductToStore, saveProductToDB } from "../../../state/Product/ProductAction";


let ProductHook = (props)=>{
    let product = useSelector((store)=>store.productReducer.Product)
    let productNameRef = useRef(product.productName);
    let productPriceRef = useRef(product.productPrice);
    let productDescRef = useRef(product.productDesc);
    let productRatingRef = useRef(product.productRating);
    // let[productName, setProductName] = useState("MERNStack")
    // let[productPrice, setProductPrice] = useState(100)
    // let[productDesc, setProductDesc] = useState("Interesting class")
    // let[productRating, setProductRating] = useState("5/5")

    let dispatchToDB = useDispatch();

    // let onTextChange = (evt)=>{
    //     let target = evt.target;
    //     let classList = target.classList;
    //     let value = target.value;
    //     if (classList.contains("productName")) {
    //         setProductName(value);    
    //     } else if(classList.contains("productPrice")) {
    //         setProductPrice(value);
    //     } else if(classList.contains("productDesc")){
    //         setProductDesc(value);
    //     }else{
    //         setProductRating(value)
    //     }
    // }
    let saveProduct=(evt)=>{
        let product={
            productName : productNameRef.current.value,
            productPrice: productPriceRef.current.value,
            productDesc:  productDescRef.current.value,
            productRating: productRatingRef.current.value
        }
        alert(JSON.stringify(product))
        dispatchToDB(saveProductToDB(product))
        evt.preventDefault();
    }
    return(
        <>
        <h1>Product Hook</h1>
        <form className={"form col-md-10 productHook"} onSubmit={saveProduct}>
            <label>
                <b>Product Name:</b>
                <input type="text" className={"form-control col-md-12 productName"}
                ref={productNameRef}
                placeholder="Product Name" maxLength={20} required/>
            </label>
            <br/>
            <label>
                <b>Product Price:</b>
                <input type="number" className={"form-control col-md-12 productPrice"}
                ref={productPriceRef}
                placeholder="Product Price" maxLength={4} required/>
            </label>
            <br/>
            <label>
                <b>Product Description:</b>
                <input type="text" className={"form-control col-md-12 productDesc"}
                ref={productDescRef}
                placeholder="Product Description" maxLength={50} required/>
            </label>
            <br/>
            <label>
                <b>Product Rating:</b>
                <input type="String" className={"form-control col-md-12 productRating"}
                ref={productRatingRef}
                placeholder="Product Rating" maxLength={3} required/>
            </label>
            <br/>
            <input type="submit" className={"btn btn-primary"} value="Add Product" />
        </form>
        
        </>
    )
}

export default ProductHook;

/**
 * useState(initial state): take intial state as argument, 
 * then returns an array of two elements[currentState, updateStateFunction]
 * 
 * useRef: create uncontrolled references to DOM elements.
 * it returns ref object which can be accessed by .current.value property
 * 
 * useEffect: is used as shouldComponentUpdate, componentDidMount, componentWillUnmount in the functionla components
 * 
 * useSelector: use to access the store from redux
 * 
 * useDispatch: use to access dispatch function from redux. 
 */