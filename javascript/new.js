// // we want to make an array and sum of all the elements of the array

// const sumArray = (nums) => {
//     let result =0;
//     for(const num of nums){
//         console.log(num);
//         result += num;
//     }
//     return {result};
// }
// const max = (nums) => {
//     let result =0;
    
//     // loops work
//     for(const num of nums){
//         if(num > result){
//             result = num;
//         }
//     }

//     return { result};

// }

// const letterFrequency = (string) => {
//     // make a object to track the letter
//         const freq = {};
//     for(const num of string){
//         // check if the frequency is exist then increment the object value
//         if( num in freq){
//             freq[num] = freq[num]+1;
//         }  else {
//             freq[num] = 1;
//         }  
//         // increment the object


//     }
//     return freq;
// }

// const wordfreq = string =>{
//     // let fre = {};

//      let words = string.split(' ');

//     //  or we can call the letterfrequency from the abovve
//     //  it will do the same 
//     //  the difference is to convert the string in array of string 
//     //  by splitting the string from " " ans empty string;
//      return letterFrequency(words);

//     // for(const word of words){
//     //     if( word in fre){
//     //         fre[word] += 1;

//     //     }else {
//     //         fre[word] =1;
//     //     }
//     // }
//     // return {fre};
// }
// const nums = [ 1,2,3,14 ,5];
// console.log(wordfreq("hey abhishek this is also abhishek"));
// // console.log(letterFrequency("hahat"));




// MAP 



// let arr = [1,2,3,4,4,5]
// const result = arr.map(num => num *2);
// console.log(result);
// console.log(arr);


// FILTER - used to check some given condition and if condition satisty then return  


// const filter = [1,2,3,4,5,6];

// const result = filter.filter((num) => {
//     if(num%2 !==0){
//         return num;
//     }
// })

// console.log(result);



// REDUCE - this is also a single line function and returns a single value not an array



// const nums = [1,2,3,4];

// const result = nums.reduce(function(prev, next){
//     return prev+next;
// })
// // console.log(result);

// const num = nums.reduce((prev,next)=>prev*3)
// console.log(num);


const worth = [{name : 'abhi',networth :20},
{name:'manu',networth:30},
{name:'sam',networth:40}];


const result = worth.reduce(function(prev,next) {
    return prev + next.networth;
},0)
console.log(result);