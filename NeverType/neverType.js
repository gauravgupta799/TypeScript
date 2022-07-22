// function apiError(msg ,code) {
//    return msg + code;
// }
// console.log(apiError("Server side error", 500));
// function apiError(msg ,code) {
// }
// console.log(apiError("Server side error", 500)); //undefined when return undefined it type is void
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError("Server side error", 500));
