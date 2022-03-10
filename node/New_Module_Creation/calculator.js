function add (a,b){
    return a + b
}
function sub (a,b){
    return a - b
}
function div (a,b){
    return a / b
}
function rem (a,b){
    return a % b
}
function mul (a,b){
    return a * b
}

module.exports = {
    addition : add,
    subraction : sub,
    multiply : mul,
    division : div,
    remainder : rem
}