const express = require("express")
const app = express()
const cors = require("cors");
const userRoute = require("./router/user_route");
const userApp = express();
const productRoute = require("./router/product_router")
const productApp = express();
app.use(cors());

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false}));

app.use("/user", userRoute)

userApp.use("/", userRoute)

app.use("/product", productRoute);

productApp.use("/", productRoute)

app.listen(9000)

