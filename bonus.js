// var marks = [12, 12, 23, 34, 34, 34, 67]
// for(var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }
// console.log('outside')
// console.log('gulisthan')

// function add(number1, number2){
//     var total = (number1 + number2);
//     return total;
// }
// var result1 = add(45, 55);
// console.log(result1);
// console.log('not adding this time')
// console.log('not eating right now')
// var result2 = add(44, 100);
// console.log(result2);

var marks = [12, 12, 23, 34, 34, 34, 67];

function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i]; 
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var number = [12, 12, 34, 43, 45, 5433,43]
var output = largestNumber(number);
console.log('ouput',output);