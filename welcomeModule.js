// let welcome = {
//     greet : function(){
//         return "Hello World"
//     },
//     currTime : new Date().toLocaleDateString(),
//     institute : "Red And White Multimedia"
// }

// module.exports = welcome


let welcome = {
sum : function(){
    let a = 8
    let b = 90
    let c = a +  b
    return c
},

age : function(age){
    if(age >= 18){
       return "Vote"
    } else {
     return "No"
    }
},
multiply : function(a,b){
    return a * b
}


}

module.exports = welcome