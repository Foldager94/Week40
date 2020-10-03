// Opgave 2

function someFunction(n){
    if(n.includes('a')){
        return n;
    }
}

//Opgave 2.A
function myFilter(array, callback){
    var filterdArray = [];
    for(let i = 0; i < array.length; i++){
        var result = callback(array[i]);
        if(result != null){
        filterdArray.push(result);
        };
    }
    
    return filterdArray;
};

var newArray = myFilter(names, someFunction);
console.log("\nOpgave 2.A: ");
console.log(newArray)



// Opgave 2.B

function myMap(array, callback) {    
    var mappedArray = [];         
    for(let i = 0; i < array.length; i++) {    
        let result = callback(array[i]);        
        mappedArray.push(result);    
    }    
    return mappedArray;
}

var newArray2 = myMap(names, someFunction);
console.log("\nOpgave 2.B: ");
console.log(newArray2)