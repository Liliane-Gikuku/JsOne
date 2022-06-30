// Write a JavaScript program which iterates the integers from 1 to 100. 
// But formultiples of three print "Fizz" instead of the number and for 
// the multiples of five print"Buzz". For numbers which are multiples of 
// both three and five print "FizzBuzz".

function FizzBuzz(num){
    for ( var num = 1; num <= 100; num++ )
    {
      if ( num%3 === 0 && num%5 === 0 )
      {
        console.log( num + " FizzBuzz" );
      }
      else if ( num%3 === 0 ) 
      {
        console.log(num+ " Fizz" );
      }
      else if ( num%5 === 0 ) 
      {
        console.log(num+ " Buzz" );
      }
      else
      {
        console.log(num);
      }
    }
}

FizzBuzz(1,2,3,4,5,6,7,8,9,10)



// Write a JavaScript program to sum the multiples of 3 and 5 under 1000

function adding(){
    var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
}
adding()

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function numberDivisibility(){

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
}
numberDivisibility()

//4. Write a JavaScript conditional statement to find the
 //largest of five numbers in thegiven array. Let num = [-2, 4,-5, 6,0]
var numbers=[-2,4,-5,6,0];
var largest = numbers[0];
for(var i=0;i<numbers.length;i++){
if (largest < numbers[i]){
largest = numbers[i]
}
}
console.log(largest)


//5. Using conditional statements, write a JavaScript program 
//to find the largest of the following two numbers: 10 & 40


let a=10;
let b=40;
if(a>b){
console.log(a +" "+"is the largest number")
}
else{
console.log(b +" "+" the largest")
}

//6. Write a JavaScript program to find leap years from 2000 to 2022
var year;
for ( year=2000; year<2023; year++){
if (year%4 == 0 && year%100!=0 ||year%400==0){
console.log(year + " "+"is a leap year")
}
else{
console.log(year+ " "+ "is not a leap year")
}
}