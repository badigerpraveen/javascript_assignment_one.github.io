// 1) For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.

let isPrime = true;
function primeNumber(num) {
  if (num === 0 || num <= 1 || num === 2) {
    console.log(`${num} is a prime number`);
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      console.log(`${num} is a prime number`);
    } else {
      console.log(`${num} is not a prime number`);
    }
  }
}

primeNumber(7); 

// 2) Given a positive integer, N. Find the factorial of N.

function factorial(num) {
    let result = num;
    if (num === 1) {
        return 1
    }
    else {
        while (num > 1) {
            num--
            result *= num;
        }
    }
    return result;
}
 let result  = factorial(5); 
  console.log(result);  


 //3) You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0). 
 let arryInput = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 //       index    0  1  2  3  4  5  6  7  8  9 
  // out put     [ 1,    3,    5,    7,    9     ]
 //let indexArr = arryInput.length ;  

 function alternateOrder( arryInput){
   
    for(let i=0; i< arryInput.length  ; i++){
       // console.log(arryInput.indexOf(arryInput[i]),"<br>");
        if(arryInput[i] % 2 !== 0){
           console.log(arryInput.indexOf(arryInput[i]) , arryInput[i]);
        }
    } 

    

 } 

 alternateOrder(arryInput);
  

 

//4) Given an array A of size N, print the reverse of it.

let a = [3,4,2,7,1] ; 
a.reverse()
console.log(a);

arr = [3,4,2,7,1]; 

arr1 =[];
for(let i= arr.length-1 ; i >= 0 ; i--){
   arr1.push(arr[i]);

} 

console.log(arr1);

//5 Given a sorted array A[] of size N, delete all the duplicate elements from A[].
//Note: Don't use set or HashMap to solve the problem.

let a_rry = [1,2,4,2,8,6,1,5,6];
//1,2,4,8,5,6
let uniqArry = [];

a_rry.sort((a,b)=>{
  return a - b ;
})

console.log("with duplicates",a_rry);

for(let i = 0 ; i<a_rry.length ; i++){
   if(a_rry[i] !== a_rry[i-1]){
    uniqArry.push(a_rry[i]);
   }
} 
console.log("No duplicates",uniqArry);

 
//6 Given a string “nitin”, check if it is palindrome or not. 
 

 function palindrome(str = "nitin"){
  
   let textStr = str.split("").reverse().join("");
  return (textStr === str) ? `${str} is a palindrome` : `not a palindrome`;
    //console.log(textStr);
 }

 let palindromeResult = palindrome();
 console.log(palindromeResult);



//7) Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
//Input: S = i.like.javascript.very.much
//Output: much.very.javascript.like.i

let strText = "i.like.javascript.very.much";
//let resultText = strText.split(".").reverse().join(".");
let resultText = strText.split(".");
console.log(resultText);
let reverseText = [];

function textReverse(resultText){ 
    for(let i = resultText.length-1; i >=0 ; i--){
        reverseText.push(resultText[i])
        console.log(resultText[i]);
    }
   return reverseText.join(".") ;
} 

let resultTextreverse = textReverse(resultText);

console.log(resultTextreverse);

//8 Given a string str containing only lower case alphabets, the task is to sort it in lexicographically-descending order.
//Ex: Input: str = "pace"
//Output: "peca”

let String = "pace";

let x = String.split("").sort().reverse().join("");

console.log(x);


