// Opgave 1
var names = ['Hassan', 'Lars', 'Bent', 'Birgitte', 'Bo', 'Christoffer'];

// Opgave 1.A
let namesWithA = names.filter(n => n.includes('a'));
console.log("\nOpgave 1.A: ");
console.log(namesWithA);

// Opgave 1.B
let namesInRevers = names.map((n) => {
    var reversName = "";
    for(let i = n.length - 1; i >= 0; i-- ){
        reversName += n[i];
        
    }
    return reversName;
});
console.log("\nOpgave 1.B: ");
console.log(namesInRevers);