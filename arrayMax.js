var marks = [12,12,32,45,345,34,34];

var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("highest value is:", max);