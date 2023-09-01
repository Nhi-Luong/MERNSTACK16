var Student = {
    Name : "Nhi",
    Session: " MERNStack",

    printStudent : function(){
            console.log(`
                ${this.Name},
                ${this.Session}
            `) 
            setTimeout(()=>{
                console.log(`
                ${this.Name}
                ${this.Session}
                `)
            },1000)
    }
    
}

Student.printStudent();

