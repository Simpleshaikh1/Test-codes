// let i = 1;

// let cool = (document.getElementById('team').innerHTML = i);

// function game() {

//     i+=1;
//     document.getElementById('team').innerHTML = i;

// }

// let n = 2;


// let button = document.getElementById('btn');
// let pTag = document.getElementById('team');

// button.addEventListener('click', () => {
//     pTag.textContent + 1;
// })


// document.getElementById("btn").addEventListener("click", pTag);
// let i = 2;
// function pTag(){
//     i = i + 1 
//     document.getElementById("team").innerHTML = i;
// }


// let pTag = document.getElementById('team');

// call a btn, call a 2 pTag

// let ab = document.getElementById("btn")

// let a = document.getElementById("team");
// let b = document.getElementById("team1");

// let c = 2;
// let d = 3;

// ab.addEventListener('click' c)

// document.getElementById("btn").addEventListener('click', pTag);
// document.getElementById("btn2").addEventListener('click', pTag1);
// document.getElementById("btn3").addEventListener('click', pTag2);
// let i = false;
// let b = false;


// function pTag(){
//     document.getElementById("team").innerHTML = i+=true;
// }
// function pTag1(){
//     document.getElementById("team2").innerHTML = b+=true;
// }

// function pTag2(){
//     if (i===b)
//         document.getElementById("team3").innerHTML = true
//     else
//         document.getElementById("team3").innerHTML = false
// }

// function Declare(a, b){
//     return 4**2
// }
// console.log(Declare())

// const Declare = (a,b) => 3**4;
// console.log(Declare())



// let a = 4;
// let b = "90";
// let c = ["boy","girl"];
// let d = {boy:"festus", girl:"iyanu" };

// function buy (a, c){
//     let b = a+1;
//     let d = c +1;
//     console.log(b,d);
//     let e = b + d 
//     if (e >= 40) return
//     buy(b,d)
// }

// console.log(buy(1,2))


// import Backpack from "./newObject";

// const newEverydayPack = new Backpack(
//     "Everyday backpack",
//     30,
//     "grey",
//     15,
//     26,
//     26,
//     false
// );

// console.log(newEverydayPack);
// console.log(newEverydayPack.pocketNum
//     )
    



  
 
// let NAME = {
//     type: "Toyota",
//     name: "lexus",
//     color: "blue",
//     fullName:{
//       firstName:"",
//       secondName:""
//     },
//     size:"big",
//     completeName: function(Simple, Shaikh){
//         this.fullName.firstName=Simple;
//         this.fullName.secondName=Shaikh;
//         return this.fullName
//     },

//     completeName :{ myname: 'Toyyib', nikname: firstName('Simple'), special: Al-jawzy },

//     myNAME: function (name) {
//         if (name === 'Simple') {
//           return name;
//         } else {
//           return "Sorry, my name is not " + name + ".";
//         }
//       }
      
    
//   };
//   console.log(`${this.NAME.fullName} ${this.NAME.secondName}`)


// Declare an object with property o numbers, and do summation of properties. 


// const sales = 'Toyota';

// function carTypes (name) {
// const name1 = (name === 'Honda');
//  name1 ? name : "sorry, we do not sell " + name + ".";  
//   }
  
//   const car = {myCar:'Saturn', getCar:carTypes('Honda')};
  
//   console.log(car.getCar);

// const sales = 'Toyota';

// function carTypes (name) {
// const name1 = (name === 'Honda');
//  name1 || "sorry, we do not sell " + name + ".";  
//   }
  
//   const car = {myCar:'Saturn', getCar:carTypes('Honda')};
  
//   console.log(car.getCar);

  //create function that generate an array of 11 unique number 


// function randomNum(){
//   const r = "0123456789ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
//   let col = "";
//   while( col.length < 16){
//     const s = Math.floor(Math.random().toString(36)) +1
//     if (col.indexOf(s) === -1) ;
//   }
//   return col;
// }

// console.log(randomNum());


var r = "ToyyiBBelloomobolaji";
var s  = "";
var localVar="";
 const randomNum = function (){
  for(var i = 0; i < 16; i++){
    localVar += r.charAt(Math.floor(Math.random() * r.length)); 

    if (localVar.length >= 4){
      s += `${localVar}-`
      localVar = "";
    }
  }

  return s.slice(2, 19);
 }

 console.log(randomNum());


// function randomString(length, chars) {
//   var result = '';
//   var localVar ='';
//   for (var i = length; i > 0; --i){
//   result += chars[Math.floor(Math.random() * chars.length)];

//   if(localVar.length >= 4){
//     result += `${localVar}-`;
//     localVar = ''
//   }
  
//   }


//   return result;
// }
// var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

// console.log(rString)
















// while(r.length < 11){
//     const s = Math.floor(Math.random().toString(36)*500) +1 
//     if (r.indexOf(s) === -1) r.push(s);
// }
// console.log(r)

// let result = 1;
// const resultM = () =>{
//   for (i = 0; i < 11; );
//   let s = Math.random().toString(36);
//   result[i++] = s[i];

//   console.log( result);
// }

// resultM();

// function randomNum(){
//   let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
//   let col = "";
//   for(let i = 0; i < 11; i++){
//     col += letters.charAt(Math.floor(Math.random()* letters.length))
//   }
//   return col;
// }
// console.log(randomNum)


// let i = 0;
// let j = 10;
// checkiandj:
//   while (i < 4) {
//     console.log(i);
//     i += 1;
//     checkj:
//       while (j > 4) {
//         console.log(j);
//         j -= 1;
//         if ((j % 2) === 0) {
//           continue checkj;
//         }
//         console.log(j + ' is odd.');
//       }
//       console.log('i = ' + i);
//       console.log('j = ' + j);
//   }
// const r = Math.random().toString(36).substr(1, 11);

// console.log([...r])