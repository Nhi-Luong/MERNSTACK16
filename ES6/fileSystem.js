let fsModule = require("fs") //fs - module used to do job/s with file systems
const {log} = require("console")

//Blocking task
// log("file read start")

// let fileData = fsModule.readFileSync("buffers.js","utf-8")

// log(fileData)

// log("file read ends")

//using readFile as callback function to ignore bloacking task

console.log("file read starts async");
fsModule.readFile("buffers.js", "utf-8", (err,data)=>{
    log(data)
    log(err)
})

console.log("file read ends async");

//read-write into a new file
let newData = [{"session":"MERNStack"},{"session":"MEANStack"}]
fsModule.readFile("Text.txt", "utf-8", (err, data)=>{
    let writeStream = fsModule.createWriteStream("Text.txt", "utf-8")
    if(data){
        let oldData = JSON.parse(data);
        log(oldData);
        writeStream.write(JSON.stringify([...oldData, newData]))
    }
})