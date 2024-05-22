// var factorial = 1;
// for (var i=1; i<=10; i++){
//     factorial = factorial* i
//    console.log(factorial); 

// }


function factorial (n){
    var factorial = 1;
    for (var i=1; i<=n; i++){
        factorial = factorial * i;
    
    }
    return factorial
}
var result = factorial(10);
console.log(result);
