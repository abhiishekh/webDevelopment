// var n = Math.random();
// console.log(Math.ceil(n));

//=== is used to check if the two variable is same  
//!== is used to check if the two variable is not same

// rest is same 



// checking if the year is leap year or not

function isLeapYear(year){
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        console.log(year + " Year is leap year")
    }
    else{
        console.log(year + " Year is not a leap year")
    }
        
}
// isLeapYear(2005)


// first problem

function printNumber(){
    for(var number=1 ; number <= 100; number++){
        if(number%3 === 0){
            if(number % 5 === 0 ){
                console.log("FizzBuzz")
            }else{

                console.log("Fizz")
            }
        }else if(number % 5 === 0 ){
            console.log("Buzz")
        }else{
            console.log(number)
        }
        
    }
}

// printNumber()

var output = [];
number = 12;
function FizzBuzz(){
    if(number%3 === 0){
        if(number % 5 === 0 ){
            output.push("FizzBuzz");
            number++;
        }else{

            output.push("Fizz");
            number++;
        }
    }else if(number % 5 === 0 ){
        output.push("Buzz");
        number++;
    }else{
        output.push(number++);
    }

    
    console.log(output);
}
// FizzBuzz();
// FizzBuzz();
// FizzBuzz();
// FizzBuzz();



