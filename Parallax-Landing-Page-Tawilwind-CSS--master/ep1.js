// console.log("Operators in JS");
// let a = 45;
// let b = 5;
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);

// let num = Number(prompt("Enter the Number:"));
// console.log(`Table of ${num} is:`);
// for(let i = 1; i <= 12; i++) {

//   console.log(num + "x" + i + "=" + (num * i));
// }
// let decision = confirm("Are You Sure!");
// console.log(decision);

// let correctAnswer = "Islamabad";
// let answer;

// while(true) {
//   answer = prompt("What is the capital of Pakistan?");

//   if(answer.toLowerCase() === correctAnswer) {
//     alert("Correct Answer!");
//     break;
//   } else {
//     alert("Wrong Answer!");
//   }
// }

// let correctAnswer = "islamabad";
// let answer;

// while (true) {
//   answer = prompt("What is the capital of Pakistan?");

//   if (answer.toLowerCase() === correctAnswer) {
//     alert("Correct Answer!");
//     break;
//   } else {
//     alert("Wrong Answer!");
//   }
// }

const correctPassword = "Prius91234";
let password;

do {
  password = prompt("Enter the Password:");

  if(password === correctPassword) {
    alert("Access Allow!");
    break;
  } else {
    alert("Access Denied, Try Again!");
  }
} while(true);

let number = ()=>{
  // console.log("you are here");
  return "hello";
}

{
let naya = number(); 

console.log(naya);
}



function setPassword() {  //--Function Here-- //--Function Scope-
  let pass = prompt("Set Your Password");  //--block level Variable--

  while (pass === "" || pass === null) {
    pass = prompt("Please set your password first! It shouldn't be EMPTY");
  }

  return pass; // final password return karega
}

let savedPassword = setPassword(); // yahan store ho gaya
console.log("Your Password is:", savedPassword);

// ----- Login Check -----
let Pass;
do {
  Pass = prompt("Enter the Password");

  if (Pass === savedPassword) {
    alert("Access Allowed!");
    break;
  } else {
    alert("Access Denied");
  }
} while (true);

//Classes And objects

class form { //--Object--
    submit() {
      alert(this.name + ": Your form is submitted");
    }
    cancel() { //--Method--
      alert(this.name + ": Your request is cancelled");
    }
    fill(givenName) {
      this.name = givenName
    }
  }
  let aliForm = new form();
  aliForm.fill ("Ali");
  
  aliForm.submit();
  
  let mohsinForm = new form();
  mohsinForm.fill ("Mohsin");
  
  mohsinForm.submit();
  
  mohsinForm.cancel();
  