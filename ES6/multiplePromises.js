// concurrent promise calls
// when we make multiple promise calls and we want to check what happened to all of them 
// and then decide whats going to be the next step

//user is authenticated and my product requires some details of user using userid created but authentication
//userid - from authentication (first)

//try making these calls parallely 
//getUserProducts(userid)
//getUserAccountDetails(userid)
//getUserCartHistory(userid)
//authentication.then("To get resolve callback data").catch("To get reject callback data")

let spring2Session = new Promise((resolve, reject)=>{ //getUserProducts
    setTimeout(() => {
        resolve({
            "status" : 200,
            "Session" : "Spring Frameworks",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);
})

let mernSession = new Promise((resolve, reject )=>{ //getUserAccountDetails

    setTimeout(() => {
        resolve({
            "status" : 200,
            "Session" : "MERNStack",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);
})

let spring1Session = new Promise((resolve, reject)=>{ //getusercart

    setTimeout(() => {
        resolve({
            "status" : 200,
            "Session" : "Spring Boot",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);

})

console.log("Promises are working... ")

// when we need all the promises to be settled we use this
// the case when even one promise fails all the promises gets rejected

Promise.all([
    mernSession,
    spring1Session,
    spring2Session
]).then((data)=>{console.log("promises ", data)})
.catch((err)=>{console.log("errr ",err)})


//check the status of all the promises and then make decision
Promise.allSettled(
    [   mernSession,
        spring1Session,
        spring2Session]
    ).then((data)=>{
        console.log("then ", data)
    })