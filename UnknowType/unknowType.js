// What is unknown type?
var adata;
adata = 50;
adata = "AnyType";
var udata;
// udata = 45;
udata = "UnknownType";
var item;
// item = adata; // qill not give any error for any type 
// item = udata; // will gives error Type 'unknown' is not assignable to string type
if (typeof udata == "string") {
    item = udata;
    console.log("Type matched.");
}
else {
    console.log("Type didn't match.");
}
