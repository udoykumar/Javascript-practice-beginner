// fibo[2] = fibo[2-1] + fibo[2-1];
// fibo[3] = fibo[3-1] + fibo[2-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
// fibo[7] = fibo[7-1] + fibo[7-2];
// fibo[n] = fibo[n-1] + fibo[n-2];


// var fibo = [0, 1];

// for(var i=2; i<=12; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     // console.log(fibo[i-1], fibo[i-2], fibo[i])
// }
// console.log(fibo);


// function fibonacci(n){
//     var fibo = [0, 1];

//     for(var i=2; i<=n; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo
// }
// var result = fibonacci(12);
// console.log(result);





//FibonacciRecursive

function fibonacci(n){
    if(n == 0){
        return 1;
    }
    if(n == 1){
        return 1
    } else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result); 