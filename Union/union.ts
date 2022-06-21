// Uninon Type ( | ) ?
// :- Union types decribes a value that can be one of several types.

function combine (a: number | string , b: number | string ){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }else {
        return a.toString() + b.toString();
    }
}
console.log(combine(20,30));