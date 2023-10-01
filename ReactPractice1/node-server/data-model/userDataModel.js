let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack16 or opens a connection if already present
mongooseObj.connect("mongodb://localhost:27017/assessment4"); 

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true},
    street: String,
    mobile: Number
}
);

let UserModel = mongooseObj.model("user",userSchema);//user - collection name, pluralised by mongodb

module.exports = UserModel; //exported model to have access to all functions present in mongoose for select/insert/update