let express = require("express");
let productRoute = express.Router();
const productDataModel = require("../data-model/productDataModel");
const { model } = require("mongoose");

productRoute.post("/saveProduct", (req,res)=>{
    let product = req.body;
    productDataModel.findOne({productName : req.body.productName}).then((existingProduct)=>{
        if(existingProduct){
            console.log("Product ", existingProduct);
            res.send(existingProduct)
        }else{
            let newProduct = new productDataModel(product)
            newProduct.save().then((newProduct)=>{
                console.log("new product ", newProduct);
                res.send(newProduct);
            }).catch((err1)=>{
                console.log("save product err", err1);
                res.send("error while save product")
            })
        }
    }).catch((err)=>{
        console.log("err while finding product", err);
        res.send("Error!!1")
    })
})

productRoute.get("/getAllProducts", (req,res)=>{
    productDataModel.find().then((allProducts)=>{
        res.send(allProducts)
    }).catch(()=>{
        res.send("error fetching product")
    })
})

module.exports = productRoute;