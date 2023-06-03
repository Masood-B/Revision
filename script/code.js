// let age = 17;
// // 18 and above
// if (age > 18){
//     console.log("Well Done")
    
// }else{
//     console.log("Try again next year")
// }

// let age = 18;
// let salary = 5000
// // 18 and above
// if (age > 17){
//     if(salary >= 5000){
//     console.log("Well Done")
//     }
// }else{
//     console.log("Try again next year")
// }

// let jacket = `blue`
// if (jacket){
//     console.log(`joel jacket is naviblue`)
// }else{
//     console.log(`joel get another jacket`)
// }


// let x = 3;
// let y = 5;
// console.log(x > y ? x : y);

// let number = 3;
// console.log(typeof number)

// let numb1 = Number(4);
// let numb2 = (5);
// console.log(numb1);
// console.log(numb2 instanceof Number);

// let numb1 = Number(4);
// let numb2 = (5);
// console.log(numb1 instanceof Number);
// console.log(numb2 instanceof Number);

// let numb1 = new Number(4);
// let numb2 = (5);
// console.log(numb1 instanceof Number);
// console.log(numb2 instanceof Number);

// let numb1 = 7
// if (typeof numb1 === `number`){
//     console.log(`It a number`);
// }else{
//     console.log(`It is not a number`);
// }

// let data = [`Henk`, 9, true, 8, `J`, 7.4]
// for(let i=0; i<5; i++){
//     console.log(i)
// }

// for(let i=0; i<=10; i++){
//     console.log(i)
// }

// let data = [`Henk`, 9, true, 8, `J`, 7.4]
// for(let i=0; i < data.length; i++){
//     if(typeof data[i] == 'number') {
//     console.log(data[i])
//     } 

// }

// let data = [`Henk`, 9, true, 8, `J`, 7.4]
// for(let i=0; i < data.length; i++){
//     if(typeof data[i] == `int`) {
//     console.log(data[i])
//     } 

// }

// let person1 = {
//     firstName: `Masood`,
//     lastName: `Basardien`,
//     age: 21,
//     race: `Colored`

// }

// let person2 = {
//     firstName: `Kurai`,
//     lastName: `Dragteen`,
//     age: 27,
//     race: `White`

// }

// let person = [person1, person2];
// console.log(person);
// console.log(person[1].race);

// let numbers = [9, 11, 34];
// console.log(numbers);
// numbers.push(12, 9);
// console.log(numbers);
// console.log(numbers[0]);
// let size = numbers.length;
// console.log(`Array: ${size}`)
// console.log(numbers[size]);

// let sentence = `I love Programming`;
// console.log(sentence.length);
// console.log(sentence);
// console.log(sentence[sentence.length -1]);
// console.log(sentence.slice(0, -1));

// let sentence = "I love programming";
// console.log(sentence.length);
// console.log(sentence);
// console.log(sentence[sentence.length-1]);
// console.log(sentence[0],
//     sentence.slice(sentence.lastIndexOf('n')+1,
//     sentence.length+1));

// function addition(){
//     console.log(`My name is masood`);
// }
// addition();

// function addition(userName){
//     console.log(`My name is ${userName}`);
// }
// addition(`Masood`);

// function addition(userName){
//     return userName
// }
// console.log(addition(`Masood`))

// let addition = (numb1, numb2)=>{
//     return numb1 + numb2
// }
// console.log(addition (5,3))

// let numbers = [9, 4, 5, 12, 6];
// for(i = 0; i < numbers.length; i++){
//     console.log(i);
// }
// console.log(`=========`);
// console.log(i);

// let numbers = [9, 4, 5, 12, 6];
// let cnt = 0;
// while(cnt < numbers.length){
//     console.log(numbers[cnt]);
//     cnt++;
// }

// let numbers = [9, 4, 5, 12, 6];
// let cnt = 0;
// numbers.forEach(function (num){
//     console.log(num)
// });

// let number = 15.56

// console.log(math.round);
// console.log(math.);
// console.log(math.);
// console.log(math.);
// console.log(math.);

// 29/05/2023

// for(let i = 0; i < 10; i++){
//     if((i % 2) > 0)
//         continue -  it skips the numbers
//     console.log(i);
// }
//      firstName & Lerato is both keys (another name is key- property, index )
// let personalDetails ={
//     firstName: "Lerato",
//     lastName: "Henk",
//     age: 27
// }
// console.table(personalDetails)
// console.log(personalDetails["lastName"]);
//     //  difference in & of (in is index(property) & of is offspring(value))
//  for (let p in personalDetails){   // in = index and refers to the property
//     console.log(p);                // displays all the properties
// }
// for(let p in personalDetails){
//     console.log(`${p} -> ${personalDetails[p]}`); // to show the value and the property
// }
// console.log(personalDetails.firstName);
// let subjects = ["HTML", "CSS", "delphi", "Javascript"]
// for(let subject of subjects){       // of - to give you the value
//     console.log(subject);
// }

// let numbers = [2,5,7];
// //normal log
// console.log(numbers);
// //table format
// console.table(numbers);
// // how many elements in the array
// console.log(numbers.length);
// // add a new element to an array
// // push adds the element to the right hand side of the Array. it will be the latest element
// numbers.push(7,6)
// console.log(numbers);
// // pop removes the last element from the right hand side of the array
// numbers.pop();
// console.log(numbers);
// // shift removes the first element
// numbers.shift()
// console.log(numbers);
// //unshift to add the first element
// numbers.unshift(10)
// console.log(numbers);
// // display just 1 number
// console.log(numbers.slice(1,3));
// // add any number any where in the Array
// numbers.splice(2, 0, 9, 11)
// console.log(numbers);
// // remove any number any where in the Array
// numbers.splice(1, 1) // the second number is to delete a number
// console.log(numbers);
// // Remove duplicate long way
// let noDuplicate = []
// numbers.forEach((items)=>{
//     if (!noDuplicate.includes(items))
//     noDuplicate.push(items)
// })
// console.log(noDuplicate)
// // Remove duplicate long way
// console.log( new Set(numbers));

// console.log(numbers.indexOf(7));
// console.log(numbers.lastIndexOf(7));
// console.log(numbers.concat([28, 27]));

// // Array methods:
// let numbers = [2, 5];
// console.log("length:", numbers.length);
// console.log("numbers:", numbers);
// // add at the back
// numbers.push(9);
// numbers.push(6);
// console.log("After push()", numbers);
// console.log("length:", numbers.length);
// // remove the last element
// numbers.pop()
// console.log("After pop()", numbers);
// // remove the first element 
// numbers.shift()
// console.log("After shift(): ", numbers);
// // add at the front
// numbers.unshift(12, 18)
// console.log("After unshift()", numbers);
// //
// const firstTwo = numbers.slice(0, 2)
// console.log(firstTwo);
// console.log(numbers);
// //
// numbers.splice(2, 0, 2)
// console.log("After splice():", numbers);

// // Find a primitive element

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] != 2)
//         console.log(numbers[i]);
// }
// console.log(numbers.filter( i => i == 2 ));
// numbers.filter( (value, i)=>{
//     if(value == 2)
//         console.log(i , value);
// } );
// // shows the number element index position
// console.log("indexOf():",numbers.indexOf(18));
// //
// const secArr = [19, 18]
// // combine 2 array
// console.log("concat():",numbers.concat(secArr))
// // seperate the elements
// console.log("join():",numbers.join(" - "));
// //
// let myArr = new Array();
// let myArr2 = new Array(4).fill("*");
// console.log("fill()", myArr2);
// //
// console.log("Check if all elements are even numbers? ", numbers.every( (value)=>{
//     return value % 2 == 0
// } ))
// //
// console.log("Check if some elements are even numbers? ", numbers.some( (value)=>{
//     return value % 2 == 0
// } ))
// //
// console.log("Try to find number 2:", numbers.find( value => {
//     return value == 19
// }))
// //
// console.log("findIndex(): ", numbers.findIndex( value => value == 18 ) )
// //
// console.log("includes(): ", numbers.includes(2) )
// //
// console.log("reduce(): ", numbers.reduce( (a,b)=> a+b))
// //
// console.log("reduceRight(): ", numbers.reduceRight( (a,b)=> a+b))
// //
// console.log("sort(): ", numbers.sort());
// // asendimng order 
// // console.log(numbers.sort((a,b)=> a-b));
// // decending order 
// // console.log(numbers.sort((a,b)=> b-a));
// //
// console.log("reverse(): ", numbers.reverse());

// let names = ["Kamve", "Jason", "Mujahid"]
// console.log(names);

// console.log(names.filter( name=>{
//     return name.indexOf("a") ==1
// }))
//                 // OR 
// console.log(names.filter(names =>{
//     return names.charAt(1) == "a"
// }));

// let data = [3,"Codi", 7]
// console.log(data.filter(num=> typeof(num) == "number").reduce((a,b)=> a+b));

// // Joel's answer

// // let addition = data.filter( d => {
// //     return Number.isInteger(d)
// // }).reduce((a,b)=> {return a+b});
// // console.log(addition);

// console.log(data.find( value => {
//     return value == "Codi"
// }))

// let nname = ["Siya", "Äphelele", "Rabia"]
// console.log(nname);
// let strNname = nname.join(" | ")
// console.log(strNname);
// console.log(typeof strNname);


// // // // // // // // // // / // // // // / // // / // // / // // / // / /// // / / / // / / // / // / / / // / / // / / / / / / / / / / / / /  // //

// June 03
// Arrow function: An arrow function is an alternative way of creating a declaration function.
// More on an object
 // The class needs to explain the object.
 let person = {
    firstName: 'Lerato',
    lastName: 'Tshepo',
    age: 27
}
// Display a person object on a console.
console.log(person);
console.log("Object.keys(): ", Object.keys(person));
console.log("Object.value(): ", Object.values(person));
console.log("Object.entries(): ", Object.entries(person));
console.log("dot operator: ", person.firstName);
console.log("[] operator: ", person['age']);
console.log("['subject'] operator: ", person['subject']);
console.log("Check if an object has property: ", person.hasOwnProperty('subject') ? person.subject : 'subject property wasn\'t found' );
person.subject = ["HTML", "CSS", "Javascript"]
console.log("Added subject property: ", person);

let person1 = {
    firstName: 'Joel',
    lastName: 'Mukanya'
}
Object.keys(person1).forEach( key => {
    console.log(key);
})
// // Function in an object
let person3 = {
    firstName: 'Lerato',
    lastName: 'Tshepo',
    age: 27,
    fullName: function() {
        return this.firstName.concat(" ", this.lastName)
    }
}

// Display user full name
console.log("Your full name is", person3.fullName());

// Factory function
// It is a function that allows us to create and return an object.
// In addition, it does return an object of any class directly.
// When defining a factory function, you should make use of the camel case.

// Example 1
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        display: function() {
            return firstName.concat(" ", lastName)
        }
    }
}
const joelDetail = createPerson("Joel", "Mukanya");
console.log("Full name: ", joelDetail.display());
const henryDetail = createPerson("Henry", "Tshepo");
console.log("Full name: ", henryDetail.display());

function createPerson1(firstName, lastName, salary,  performed) {
    let person4 = {}
    person4.firstName = firstName
    person4.lastName = lastName
    person4.salary = salary
    person4.performed = performed
    // Check if the user qualifies for a bonus.
    person4.qualified = ()=> {
        if(person4.performed)
            person4.salary += 500
        else
            person4.salary = salary
        return person4.salary
    }
 // Return an object
    return person4
}
const joelDetail1 = createPerson1('Joel', 'Mukanya', 5000, false);
console.log("Salary: R", joelDetail1.qualified());

// Constructor function

// It is used to create objects and return this keyword.
// When creating an object, you must use a new keyword.
// When defining a constructor function, you should make use of the Pascal case.
// NB: This keyword represents an object when it is created.

// Example 1

function Person5(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}
let henkDetail = new Person5('Henk', 'Daniels')
let samDetail = new Person5('Sam', "Luvuyo")
console.log(henkDetail);
console.log(samDetail);

// Example 2

function Person6(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = ()=> {
        return this.firstName.concat(" ", this.lastName)
    }
}
let henkDetail1 = new Person6('Henk', 'Daniels')
let samDetail1 = new Person6('Sam', "Luvuyo")
console.log(henkDetail1);
console.log("Full name:", henkDetail1.fullName());
console.log(samDetail1);
console.log("Full name:", samDetail1.fullName());

// // Difference between Object literal and constructor function
// // An object literal is when you want to create a single object. Once you update the property value of an object, it will affect the original object.
// let person7 = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person7);
// // A constructor function is when you want to create multiple objects. Each property’s value is unique.
// // Explain Object.prototype.contructor
// // In a constructor function, each object has its own value, but if you want both objects to share the same value, you need to make use of the Object.prototype property
// // ObjectName.prototype.propertyName = “value”;
// // Example
// function Person8(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = ()=> {
//         return this.firstName.concat(" ", this.lastName)
//     }
// }
// let henkDetail2 = new Person8('Henk', 'Daniels')
// let samDetail2 = new Person8('Sam', "Luvuyo")
// console.log(henkDetail2);
// console.log(samDetail2);
// // Share the same value by making use of prototype
// Person8.prototype.age = 30
// console.log("Henk's age:", henkDetail2.age);
// console.log("Sam's age:", samDetail2.age);
// // Javascript built-in Constructors
// const myObj = new Object() // Created a new object
// // A new string
// const myStr = new String("I love programming. Join the group.")
// const numb3 = new Number(5) // A new number object
// const isMale = new Boolean(true) // A boolean object
// const myArr3 = new Array(5).fill(0);
// console.log("myObj:", myObj);
// console.log("myStr:", myStr);
// console.log("numb3:", numb3);
// console.log("isMale:", isMale);
// console.log("myArr3:", myArr3);
// // Cloning an object
// // There are three ways to clone an objects in JS
// // NB: Objects in JS are reference values.
// // Spread operator or shallow copy
// // It will not deep clone a nested object
// const person9 = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person9);
// const newPerson = {...person9}
// console.log(newPerson);
// Object.assign()
// // It will create a shallow copy of the object.
// // It will not deep-clone a nested object
// const person10 = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// const newPerson1 = Object.assign({}, person10)
// console.log(newPerson1);
// JSON
// // It is referred to as a quick and dirty way of deep cloning an object.
// // Deep copies nested objects but doesn’t copy a function.
// const person11 = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person11);
// const newPerson2 = JSON.parse(JSON.stringify(person11))
// console.log(newPerson2);
// // NB: Objects are reference types, which means they don’t hold a value but are pointers that point to the memory where a specific value is stored.
// // Example 1
// const person12 = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person12);
// let newPerson3 = JSON.parse(JSON.stringify(person12))
// newPerson3.firstName = "John"
// newPerson3.lastName = "Tshepo"
// console.log(newPerson3);
// // Example 2
// // In the below example, you will see why we shouldn’t copy or clone an object using an equal sign.
// const person13 = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// let newPerson4 = person13
// newPerson4.firstName = "Henk"
// newPerson4.lastName = "Peterson"
// console.log(person13, newPerson4);
// // Difference between shallow copy and deep copy
// // Variables are used to store values, which can be primitives or references. Let’s consider the below example:
// let numb1 = 9;
// /* We copy the value of numb1 and store it in numb2.
// So what will happen if we change the value of numb2?
// It will not affect the value stored in numb1.
// */
// let numb2 = numb1
// // Let's change numb2 value
// numb2 = 2
// console.log(`numb1: ${numb1}\nnumb2: ${numb2}`);
// // Deep copying means that the values of the new variable point to a new reference in memory.
// // A shallow copy means that some values are still using the origin variable reference in memory.
// // NB: The efficient way to clone an object is with Object.assign().
// // For deep cloning, make use of _.cloneDeep() (any array).
// // NB: Students need to do some extra research on the difference between shallow and deep copy.

// Garbage collection

// GC Monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
// https://betterprogramming.pub/deep-dive-into-garbage-collection-in-javascript-6881610239a
// Difference between function declaration and expression or hoisting

// Hoisting It is one of the ways in which JS moves variables and functions to the top of the scope before code execution.

// console.log(numb2);
// var numb2 = 8;
// /*
// The above code is equivalent to
// var numb2;
// console.log(numb2);
// numb2 = 8
// */
// Function declarations are not executed immediately, only when they are invoked or called.
// function display() {
//     console.log("Well done");
// }
// Function as an expression It can be defined as a variable; it is also referred to as an anonymous function.
// let addition = function(x, y) {return x + y}
// console.log(addition(4, 5));
// Rest operator as a parameter, default parameters
// // Function with parameters
// function addition(numb1, numb2) {
//     console.log(numb1 + numb2)
// }
// addition(2, 7)
// // parameter with default value
// function addition(numb1, numb2 = 3) {
//     console.log(numb1 + numb2)
// }
// addition(2)
// // Rest operator
// function addition(...args) {
//     console.log(`Sum of ${args} is ${args.reduce( (a, b)=> a + b)}`)
// }
// addition(2, 5, 12)
// Exception handling using try and catch
// try{
//     console.log(addition(9, 3))
// }catch(e) {
//     console.log(e.message);
// }finally {
//     console.log("Use it to close a file or database connection");
// }
// Getters, setters
// let person = {
//     firstName: "Joel",
//     lastName: "Mukanya",
//     get getName() {
//         return this.firstName
//     },
//     set setName(value) {
//         this.firstName = value
//     }
// }
// console.log(person.getName);
// person.setName = "John"
// console.log(person.getName);
// Or
// Key code:
// https://commons.wikimedia.org/wiki/File:ASCII-Table-wide.svg
// document.querySelector('button[type=\'button\']').
// addEventListener('click', ()=>{
//     alert(document.querySelector('#data').value)
// })
// document.querySelector('#data').addEventListener('keydown', (e)=> {
//     switch (e.keyCode) {
//         case 48:
//            console.log("You pressed 0");
//         break;
//         case 49:
//            console.log("You pressed 1");
//         break;
//         case 50:
//            console.log("You pressed 2");
//         break;
//         default:
//             console.log(`your key is ${e.key} and keyCode is ${e.keyCode}`)
//         break;
//     }
// })
// local storage (done)
// localStorage.getItem('key')
// localStorage.setItem('key', 'value')
// localStorage.removeItem('key')
// localStorage.clear()// It will remove all the keys.
// Promises
// It is a Javascript object that links producing and consuming codes.
// The producing code can be successful or it might be rejected.
// Consuming code we must wait for the result.
// let promiseMade = new Promise( (resolved, rejected)=> {
//     resolved()
//     rejected()
// })
// promiseMade.then( (value)=>{
//     // Your code
// })
// .then( (value)=>{
//     // Your code
// })
// .catch( (e)=>{
//     // Display the error message.
// })
// // Promise
// function myPromise() {
//     let numb1 = 9
//     let operator = '-'
//     let numb2 = 11
//     let promiseMade = new Promise( (resolved, rejected)=> {
//         if((numb2 > 0) && (numb1 > numb2 ))
//             resolved(eval(`${numb1}${operator}${numb2}`) )
//         else
//             rejected("You can't divide a number by zero or numb1 must be great than numb2")
//     })
//     promiseMade.then( (value)=>{
//         console.log(value);
//     })
//     .catch( (e)=>{
//         console.log(e)
//     })
// }
// myPromise()