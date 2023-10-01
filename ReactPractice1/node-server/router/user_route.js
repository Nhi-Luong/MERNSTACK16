let express = require("express");
let userRoute = express.Router();
const userDataModel = require("../data-model/userDataModel")

userRoute.post("/signinup", (req,res)=>{
    let user = req.body
    userDataModel.findOne({userName : req.body.userName}).then((existingUser)=>{
        if(existingUser){
            console.log("sign-in", existingUser.userName)
            res.send(existingUser)
        }else{
            //schema to create new user object
            let newUser = new userDataModel(user)

            newUser.save().then((newUser)=>{
                console.log("successful signup ", newUser);
                res.send(newUser)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })
})

userRoute.get("/getAllUsers", (req,res)=>{
    userDataModel.find().then((allUsers)=>{
        res.send(allUsers)
    }).catch(()=>{
        res.send("error while fetching users")
    })
})

module.exports = userRoute;