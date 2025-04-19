// const users = ["alex","mike","jhon","alice"];

// console.log(users);

// function hello(){
//     console.log("hello");
// }


// //objects
// const user = {
//     firstName : "jhon",
//     lastName :"doe",
//     age:24,
//     nic:2002888181877,
//     email:"jhon@gmail.com",
//     isMarried:false
// }

// console.log(typeof user);

// const userInput = "firstName";

// console.log(user.firstName);
// console.log(user.userInput);

// console.log(user[userInput]);




// console.log(user.firstName);
// console.log(user['firstName']);

// console.log(user.age);
// console.log(user['age']);

// console.log(user.email);
// console.log(user.nic);
// console.log(user.isMarried);

// user.firstName="alex";
// user['firstName']='alex';
// console.log(user.firstName);


 const user = {
        firstName : "jhon",
        lastName :"doe",
        age:24,
        nic:2002888181877,
        email:"jhon@gmail.com",
        isMarried:false,
        isLoggin:false,
        favColors:["red","blue"]
    }

    user.address = "kegalle";
    user.newKey ="";

    console.log(user);

    const text = "first name is " +user.firstName;

    console.log(text);

    console.log(user);

    function btnClick(){
        const body = document.querySelector("body");
        const text = document.getElementById("text");

        const h2 = document.createElement('h2');
        h2.innerText = user.firstName;
        body.append(h2);

        user.isLoggin=true;


        body.style.backgroundColor= user.favColor;
      

      console.log(user);
    }