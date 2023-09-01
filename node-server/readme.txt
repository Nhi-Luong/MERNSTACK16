- create new package
- use cli to create package.json - npm init
- fill in all information, then it will show in the package.json
- in the same folder, install express - npm i express
- create .gitignore then add the path that we don't want to push to git(node_modules). 

//create different route files for your api
- go to router file then create practice_route.js
- in practice route file, we need to import express and initialize express.Router()
- then use .get('/api', function(request, response){}) to create the definition of this api
- after that, use module.exports to export what part of practice_route.js we want to reuse in different file. 
// also mount the api/s using another express app
- to mount one api (ex: practiceApp) we need to create practiceApp using express: const practiceApp = express() in server.js
- then mount the practiceApp to the main app by: app.use('/practice', practiceApp)
- after that we can similarly implement mounted api same as the main app.

// create some static files and serve them in a new html, like console.log or alert
