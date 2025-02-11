// Array
var arr = [10,20,25,15];
// destructuring:
var [a,b] =arr; // => a=10, b=20
console.log("a",a);
console.log("b",b);

[a,b,c] =arr;
console.log("a",a);
console.log("b",b);
console.log("c",c);

// object
const student = {
    Name: "pham duy",
    age: 20,
    phone:"123456789",
    email:"duy@gmail.com"
}

var {Name,phone} = student;
// => name: "pham van duy"; phone: "123456789";
console.log("name:",Name);
console.log("phone:",phone);