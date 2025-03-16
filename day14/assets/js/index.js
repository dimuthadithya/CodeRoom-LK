// console.log('hello');

// alert()
// prompt()
// confirm()

// alert("hello \nworld!");

// const Cname = "dimuth";

// const answer = prompt("enter your name?");
// console.log(answer);

// prompt("2");
// prompt("3");
// prompt("4");
// prompt("5");

// const sum = num01+num02;
// console.log(typeof num01, typeof num02);
// console.log("-----------");

// console.log(sum);

// console.log(Number(num01)+Number(num02)); 
// 1020 


// const num01 = 10;
// const num02 = 20;
// console.log(num01+num02);

// const num01 = "10";
// const num02 ="20";
// console.log(num01+num02);


const num01 = Number(prompt("enter num01"));
const num02 = Number(prompt("enter num02"));
const operator = prompt("enter operator \n *,+,-,%");

// "+" "-" "*" "%"
console.log(typeof operator);
// console.log(num01+num02);
// console.log(num01-num02);
// console.log(num01*num02);
// console.log(num01%num02);

if(operator == "+"){
    console.log(num01+num02);
}
