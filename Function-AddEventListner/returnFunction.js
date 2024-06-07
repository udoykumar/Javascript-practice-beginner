// function evenify_all(nums){
//     for(let i=0; i<nums.length; i++){
//         const num = nums[i];
//         if(num % 2 == 0){
//             console.log(num, 'is even number')
//         } 
//         else{
//             console.log(num * 2, 'is odd number')
//         }
//     }
// }

// nums = [23, 25, 45, 65, 34, 34, 56, 345]
// evenify_all(nums)


function evenify(num){
        if(num % 2 == 0){
            return num;
        } 
        else{
            return num * 2;
        }
    }
var result = evenify(13);
console.log('result', result);