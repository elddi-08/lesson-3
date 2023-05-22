// 8 - 2 = 6

// 1 number

var myAge = 16;

// 2 string
var myName = "Kutman";

// 3 Boolean
var isMarried = null;

// 4 null
var myBrother = null;

// 5 undefined
var myDog;

// 6 object {} = []
var phone = {
  model: "14 PRO",
  color: "black",
  price: 100 * 9,
  owner: myName, // kutman
};

// --------CONDIIIONS---------(if, switch)
// готовые функцые (alert, prompt, confirm)

var color = "green";
// оператыри(=,==,===,!,??,&&,||)
if (color === "red") {
  console.log("stop");
} else if (color === "green") {
  // false
  console.log(" Go ---");
} else if (color === "yellow") {
  // true
  console.log(" WAIT ---");
} else {
  console.log("NO COLOR");
}

var operation = "*";
if (operation === "+") {
  console.log(100 + 50);
} else if (operation === "-") {
  console.log(100 - 50);
} else if (operation === "*") {
  console.log(100 * 50);
} else if (operation === "/") {
  console.log(100 / 50);
}

var temp = 36;
if (temp > 41) {
  console.log("kuun ysyky");
} else if (temp > 35 && temp < 40) {
  console.log("abdan ysyky......");
}

// alert(myName)

// var text = prompt("what is your name?");

// console.log(text);

// if (text.toLowerCase === "kutman") {
//   console.log("yas i am");
// }

var someText = "Sonday";

switch (someText) {
  case "Monday":
    console.log("Пониделник");
    break;
  case "Sonday":
    console.log("Воскрисение");
    break;
  default:
    break;
}




if(!true){
    console.log("TRUE----");
}else {
    console.log("FALSE----");
}

var userDB = {
    name: 'Eldiar',
    email: 'test@gmail.com',
    password: '123456'
}