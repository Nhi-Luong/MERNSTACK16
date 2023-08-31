const express = require('express');
const fs = require('fs');
const app = express();
const vaccinationApi = express();
//1. create a basic setup with npm cli, write the steps to do so, using express
//- create new package: assessment3
//- use cli to create package.json - npm init
//- fill in all information, then it will show in the package.json
//- in the same folder, install express - npm i express. Then package-lock.json and node_modules are created.
//- install nodemon - npm i nodemon
//- go to package.json add on: *"start": "nodemon server.js"* 
//- create server.js in the same package. Now, the server is ready to work...


//2. Create an API named getInfo with server.js as main file and configure using nodemon
app.get('/getInfo', (req,res)=>{
    res.send('<h1>This is assessment 3 - getInfo api</h1>')
})

//3. Explain the purpose of express elements - Application, Request, Response and Router
//-application: top level, handle middleware, routing, and manage requests and response
//-request: contains informtion about the user's request.
//-respone: contains information that server want to return.
//-router: know as the route, use to organize the group of related routes.

//4. What will happen if we don't have package-lock.json in our application
//package-lock.json contains all dependencies (with the versions )that the server need(or doesn't) in the implementation phase.
//so without this file will lead to compatibility issues when other want to use the application with different version of dependencies.


//5. Create an api name getVaccine with get method, pass info like - vaccineName, price, doses
//   pass these information using query string and save it into a json file on server also send back the same as response
//http://localhost:9000/getVaccine?vaccineName=pfizer&price=$20&dose=2
app.get('/getVaccine', (req,res)=>{
    const {vaccineName, price, dose} = req.query;
    const vaccine={vaccineName, price, dose}
    let writeStream = fs.writeFileSync('vaccine.json', JSON.stringify(vaccine))
    res.send(`<h2>Vaccine Info: name-${vaccine.vaccineName}, price-${vaccine.price}, dose-${vaccine.dose}</h2>`)
})

//6. What is the purpose of RESTFul API and what specifications are must to make a service RESTFul
//-the main purpose of RESTFul API is to allow a simple communition way over HTTP methods
//-CRUD: Create(POST), Read(GET), Update(PUT), Delete(Delete)
//-it is stateless

//7. Create an example of Application mounting using vaccination API's
app.use('/vaccination', vaccinationApi);

//http://localhost:9000/vaccination/vaccine
vaccinationApi.get('/vaccine', (req,res)=>{
    let data = fs.readFileSync('vaccine.json',"utf-8");
    let vaccineData = JSON.parse(data)
    console.log(data)
    res.send(`<h2>Vaccine Info: name-${vaccineData.vaccineName}, price-${vaccineData.price}, dose-${vaccineData.dose}</h2>`)

})

//8. Create an API to demonstrate route param usage like - getVaccineByID 
//http://localhost:9000/vaccination/getVaccineById/1
vaccinationApi.get('/getVaccineByID/:id', (req, res)=>{
    const vaccineId = req.params.id
    res.send(`<h1>...getting vaccine id: ${vaccineId}</h1>`)
})

app.listen(9000)