const express = require('express')
const app = express()

const adminRoute = require("./router/admin_route")
const adminApp = express();
const practiceApp = express()
const practiceRouter = require("./router/practice_route")

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/file', function(req, res){
  res.sendFile(__dirname+"/public/index.html")
})

app.get('/alert.js', function(req, res){
  res.sendFile(__dirname+"/public/alert.js")
})

app.get('/info',(req,res)=>{
  let {firstName, lastName, address} = req.query;
  let info ={firstName, lastName, address}
  res.send(`<h1>First Name: ${info.firstName}, Last Name: ${info.lastName}, Address: ${info.address}</h1>`)
})

//redirect all request with /admin path to adminApp
app.use("/admin", adminApp)


//mounted admin app
// adminApp.get('/hello', (req,res)=>{
//   res.send('<h1>Hello From Admin</h1>')
// })
adminApp.use('/',adminRoute)

app.use('/practice', practiceApp)

practiceApp.use('/',practiceRouter)


//wild card operator / default api
app.get('*',(req,res)=>{
  res.send('<h1>API you"re looking for is not ready yet!!!</h1>')
})




console.log("We are listening at 9000")
app.listen(9000)