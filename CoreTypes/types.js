// Type of Assignment
// When creating a variable, there are two ways TypeScript assign a type:
// 1. Explicit
var num1 = 1000;
// num1 = "abc"; // give error:- attempts re-assign the value to a different type
var num2 = 34.58;
var str = "Hello TS";
var bool = false;
// 2. Implicit: Implicit assignment forces TypeScript to infer the value.
var num3 = 1000;
// num3 = "xyz"; // throw error num3 is a number type 
var num4 = 983.848;
var Str = "Hello TS";
var Bool = true;
// Special Types
// Type:any
// any is a type that disable type checking and effectively allows all types to be used.
var u = true;
u = "string";
console.log(Math.round(u));
