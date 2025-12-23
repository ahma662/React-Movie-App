// const user = {
//     username: "Ali",
//     Number: "xxxxxxx",


//     welcomemessage: function () {
//         console.log(`${this.username}, Welcome to Web page`);
        
//     }
// }

// user.welcomemessage()

// user.username = "Abdullah"
// user.welcomemessage()
// // console.log(this)

// const cool = () => {
//     let username = "Ahmii"
//     console.log(this)
// }
// cool()

// const addtwo = (num1, num2) => {
//     return num1 * num2;
// }

// console.log (addtwo(4,6))

// function Person(name) {
//     this.name = name;
//   }
//   const p = new Person("Ali");

//   console.log(p)

//   class men {
//     constructor(name) {
//         this.name = name;
//     }
//   }
//   const q = new men("Abdullah");
//   console.log(q)


// function Loginusermsg(username) {
//     if(!username) {
//        console.log("Please Enter Your Username!");
//        return
//     }
//    return `${username}, just logged in`
// }

// console.log(Loginusermsg("Ali"))


// const myNewArray = [100, 300, 700, 500]

// function myfunc(getArry) {
//     return getArry
// }

// console.log(myfunc(myNewArray[2]));

// // Destructuring
// const arr = [9, 7 , 6, 4, 8, 4] 
// const [a, , , ...rest] = arr
// console.log(a, rest);


//Another Method Of replacing arry values!
// let arry = [2, 4, 6, 8, 9]
// let {p, b} = {p:8, b:5}

// console.log(p, b);

// // Spread Operators
// let arry1 = [9, 7, 9]
// let obj1 = { ...arry1 }
// console.log(obj1);

// function Sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(Sum(...arry1));
// console.log(Sum.apply(null, arry1));

let arr1 = [0,1,2] // Concating 
let arr2 = [3,4,5]
arr1 = [...arr1, ...arr2]
console.log(arr1);