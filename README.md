npm install -g typescript ts-node

ts-node is for compilation 

npx tsx index.ts
tsc .\src\index.ts

not workin => ts-node index.ts

Learning Strategy (Syntax+Features) + Design Pattern with TS
- What is an interface
- What is the syntax for defining an interface ?
- How do we user interface to write reuable code ?

Understanding Basic Types in TS
Functional typing + annotations 
Type defination files 
Arrays in TS
Modules Systems
Classes + Refresher on OOP
Projects -======================> Design Pattern 

easy way to refer to the different properties + Functions that a value has 

Types Values that have this types
String 'hi there' "" 'Today is monday'
number .00024 -20 400000
boolean true false 
Date new Date()
ToDO {id: 1, Completed: true, title: "Trash"}

Types Category 
Primitive Types : number boolean void undefined string symbol null
Object Types : Function array classes and objects

Types are used by the typeScript compiler to analyze our code for errors
Types allow other engineers to understand what values are flowing around our codebase

Types easy way to refer to the different properties + functions that a value has 