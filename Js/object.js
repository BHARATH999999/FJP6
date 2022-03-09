//Empty Object Declaration

let EmptyObject = {}

console.log(EmptyObject);

let bharath = {
    name : "BHARATH",
    age : 45,
    Phone : 999999
};

//console.log(bharath);

let CapAmerica = {
    Name : "Steves",
    Age : 999999,
    friends : ["A1",'B1','c1'],
    address : {
        State : "Ap",
        City : "Del",
        Code : "258"
    },
    sayHi : function(){
        console.log("Hii Bro");
        console.log("Hii")
    }
}

//Different types of callings...........
// console.log(CapAmerica)
// console.log(CapAmerica.Name)
// console.log(CapAmerica.friends)
// console.log(CapAmerica.address)
// console.log(CapAmerica.sayHi()) //Prints Extra Undefined term
// CapAmerica.sayHi() //Doesn't Prints Extra undefined 
// console.log(CapAmerica.address.City);

// Normal Method to Access a Key
console.log(CapAmerica.Name); //Values after "." treated as Strings by Default
//Second Method to Access a Key
console.log(CapAmerica['Name']); // Here We have to Mention that it was a String "Name"

/*if you use 
console.log(CapAmerica[Name]);
it will cause an error
*/

