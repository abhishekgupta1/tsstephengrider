const today = new Date();
today.getMonth();

// based on the types typeScript has the idea that today will hold all the methods associated with date function 

const person = {
    age : 20 
};
person.age;

class color { test(){console.log('t')}}
const red = new color();
red.test();

// Type Annotations and interface

// Type Annotaions 
// - Varibale function
// Type inference 
// - Objects

// Type Annotations Code we add to tell TypeSCript what type of value a variable will refer to 
// Type Inference tries to figure out what type of value a variable refer to 

/* Develpoers tell typescript the type annoatation  
When we declare a variable on one line then initilize later 
When we want a variable to have a type that can;t be inferred 
When the function returns the any type and we need to clarify the value*/

Typescript guessess the type always

let a : number = 5;
let colors: string [] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truth: boolean[] = [true,true,false];


// usually class name starts from the capital letter and word starting from lower case is ment to be instance of type class assigned via variable
class Car {

}
let car: Car = new Car();

let point: {x:number; y:number}={
    x:10,
    y:20
}

// 20 Annotations around functions
