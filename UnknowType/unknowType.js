"use strict";
// What is unknown type?
let adata;
adata = 50;
adata = "AnyType";
let udata;
// udata = 45;
udata = "UnknownType";
let item;
// item = adata; // qill not give any error for any type 
// item = udata; // will gives error Type 'unknown' is not assignable to string type
if (typeof udata == "string") {
    item = udata;
    console.log("Type matched.");
}
else {
    console.log("Type didn't match.");
}
