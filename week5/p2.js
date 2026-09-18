function multiply(a,b){
         return a*b
}
function add(a,b,c,d,callback){
 return callback(a+b,c+d)
}
console.log(add(1,2,3,4,multiply))
