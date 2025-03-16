// console.log("hello");

// prompt , alert , confirm 

/*
const num01 = Number(prompt("Enter num01")); //num 
const num02 = Number(prompt("Enter num02")); //num
const operator = prompt("Enter operator"); //string
*/

// console.log(num01,num02,operator);

// if(operator=== "+"){
//     alert(`Sum of ${num01+num02}`)
// console.log(num01+num02);
// }else if(operator==="-"){
//     alert(num01-num02)
//     console.log(num01-num02);
// }else if(operator=== "%"){
//     alert(num01%num02)
//     console.log(num01%num02);
// }else if(operator==="*"){
//     alert(num01*num02)
//     console.log(num01*num02);
// }

// const age = Number(prompt("enter your age: "));

// if(age>18){
//     alert("you are allowed");
// }else if( age>10){
//     alert("you are not allowed ");
// }else{
//     alert("access denied");
// }

// confirm("")
// const result = confirm("are you sure ?");
// console.log(result);

// if(result === true){
//     alert("logout");
// }else if(result=== false){
//     alert("welcome");
// }



// functions 
// prompt();
// alert();
// confirm();



// const num01 = 10;
// const num02=20;
// const sum = num01+num02;
// console.log(sum);


// const num03 = 40;
// const num04 = 10;

// const sum01 = num03+num04;
// console.log(sum01);

// function sum(num01,num02){
//     const sum = num01+num02;
//     console.log(sum);
// }

// sum(10,20);
// sum(40,10);
// sum(4,1);
// sum(8,1);
// sum(900,10);

// function greet(){
//     alert("Welcome")
// }


const globalScope = 10 ; 

{
    const localScope = 20;
    // console.log(localScope);
}



// function sum(num01,num02){
//     const total = num01+ num02;
//     console.log(total);
// }

// sum(10,20);
// sum();

function calAge(birthYear){
    const age = 2025-birthYear;

}


const age = calAge(2001);
console.log(age);

// function calAge(birthYear){
// const age = 2025-birthYear;
// return age;
// }

// console.log(calAge(2001));


