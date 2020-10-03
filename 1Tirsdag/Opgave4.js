// Opgave 4



//Opgave 4.A

const all = ["Hassan", "Peter", "Carla", "Boline"];

const allJoined = all.join("#");

console.log("\nOpgave 4.A:\n");
console.log(allJoined);



//Opgave 4.B

const numbers = [2, 3, 67, 33];

function getSum(totalVærdi, indexVærdi) {
    return totalVærdi + indexVærdi;
}

console.log("\nOpgave 4.B:\n");
console.log(numbers.reduce(getSum));



//Opgave 4.C

const members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22}];

function ageSum(totalVærdi, indexVærdi) {

let sumAge = totalVærdi + indexVærdi.age;
    return sumAge;
}


console.log("\nOpgave 4.C:\n");
console.log(members.reduce(ageSum, 0/members.length))