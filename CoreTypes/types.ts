// Type of Assignment
// When creating a variable, there are two ways TypeScript assign a type:

// 1. Explicit
let num1:number = 1000;
// num1 = "abc"; // give error:- attempts re-assign the value to a different type
let num2:number = 34.58;
let str:string = "Hello TS";
let bool:boolean = false;

// 2. Implicit: Implicit assignment forces TypeScript to infer the value.
let num3 = 1000;
// num3 = "xyz"; // throw error num3 is a number type 
let num4 = 983.848;
let Str = "Hello TS";
let Bool = true;

// Special Types
// Type:any
// any is a type that disable type checking and effectively allows all types to be used.

let u: any= true; 
u = "string";
console.log(Math.round(u));