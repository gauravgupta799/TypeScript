// <<<--- Return Type string ----->>>
// function add(){
//     return "string";
// }
function getTime():number {
    return new Date().getTime();
 }

 console.log(getTime);

// <<<--- Return Type number ----->>>
function add(){
    return 100;
}
add();

// <<< ------- Define Parameter ------->>>
// function addition(a:number, b:number) {
//     return a + b;
// }
// addition(4,5);

const a = 20;
const b = "Hello";

function addition():number{
    return a;
}
addition();


// <<<----- Void Return Type------>>>
function greet(){
    console.log("Hello!, Good morning!");
}

let today;
function printData(){
    // today = new Date();
    today = 10*20;
}

// <<< ---- Optional Parameter ---->>>
function sum(a:number, b:number, c?: number){
    return a + b + (c || 0);
}
console.log(sum(44,56,44));
console.log(sum(33,56));

// <<<----- Default Parameters ------>>>
// For parameters with default, the default value goes after the type annotation
function pow(value: number, exponent: number = 20){
    return value ** exponent;
}


// <<<---- Named Parameters ------>>>
// Typing named parameters follows the same pattern as typing normal parameters
function divide({dividend, divisor}: {dividend: number, divisor: number}){
    return dividend / divisor;
}


// <<<---- Rest Parameters ------>>>
// Rest Parameters can be type like normal parameters, but the type must be an array as rest parameters are alwalys arrays.
function mult(a:number, b:number, ...rest: number[]){
    return a + b + rest.reduce((p, c) => p + c, 0);
}