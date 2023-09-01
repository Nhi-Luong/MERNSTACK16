const express = require('express')
const practiceRouter = express.Router();

practiceRouter.get('/hello',(req,res)=>{
    res.send('This is hello from practiceRouter')
})

module.exports = practiceRouter