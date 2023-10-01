import * as ActionTypes from "../actionTypes"

const Initial_State ={
    Product: {
        productName : "",
        productPrice:"",
        productDesc:"",
        productRating:""
    }
}

let productReducer = (state = Initial_State, action)=>{
    switch(action.type){
        case ActionTypes.AddProductToStore:
            return{...state, Product : action.payload}

        default:
            return state
    }
}

export default productReducer;