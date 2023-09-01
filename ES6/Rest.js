function arrGenerator(start, end){
    const arr = [start]
    for(let i = start + 1; i<= end; i++){
        arr.push(i);
    }
    return arr;
}
var arr = arrGenerator(100,150)
console.log(arr)

function largeSum(...restParams){
    let sum = 0;
    sum = restParams.reduce((preVal, currVal, index,arr)=>{
        return preVal+currVal;
    })
    return sum
}

console.log(largeSum(...arr))
