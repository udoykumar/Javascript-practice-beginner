function animalCalculator(depth){
var animal = 0;
if(depth <= 10){
    animal = depth * 50;
}else if(depth <= 20){
    var firstPart = 10 *50;
    var remaining = depth - 10;
    var secondPart = depth * 100;
    animal = firstPart + secondPart;
}else{
    var firstPart = 10 * 50;
    var secondPart = 20 * 100;
    var remaining = depth - 20;
    var thiredPart = depth * 300;
    animal = firstPart + secondPart + thiredPart;
}
return animal;
}

var count = animalCalculator(12);
console.log(count)
