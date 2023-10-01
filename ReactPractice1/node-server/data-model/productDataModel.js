let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack16 or opens a connection if already present
mongooseObj.connect("mongodb://localhost:27017/assessment4"); 

let productSchema = new schemaObj({
    productName: {type: String, required: true},
    productPrice: {type: Number, required: true},
    productDesc: {type: String, required: true},
    productRating: {type: String, required: true}
}
);

let ProductModel = mongooseObj.model("product",productSchema);//product and collection name, pluralised by mongodb

module.exports = ProductModel; //exported model to have access to all functions present in mongoose for select/insert/update