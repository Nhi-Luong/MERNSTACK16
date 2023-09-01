//
//single threded prog. language

//console.log("Execution Starts!!")

function Foo() {
    throw new Error("This is callstack execution!!!")
}

function Bar() {
    Foo();
}

function Bazz() {
    Bar();
}

//Bazz();


//console.log("Execution Ends!!")


//Blowing up the stack

function BlowupStack(params) {
    BlowupStack()
}

BlowupStack() //Maximum call stack size exceeded