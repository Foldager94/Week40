// Opgave 3


// Opgave 3.A

const myList = [1, 3, 4, 10, 11];
const addList = [3, 5, 10, 11, 0];

let counterA = -1;

const resultList = myList.map(numbersAdd)


function numbersAdd(number) {

    counterA++;

    return number + addList[counterA];
}
console.log("\nOpgave 3.A: ");
console.log("\n" + resultList);



//Opgave 3.B

const nameList = ["Dorte", "Bjarke", "Signe", "Ole"];

const navList = nameList.map(function (name) {
    return "<a href=´´>" + name + "</a>";
    
});

console.log("\nOpgave 3.B: ");
console.log("\n<nav>\n" + navList.join("\n") + "\n</nav>");



//Opgave 3.C

const persons = [{name: "Hassan", phone: "1234567"}, {name: "Peter", phone: "675843"}, {name: "Jan", phone: "98547"}, {name: "Boline", phone: "79345"}];

const tableHead = "<thead><tr>" +
        "\n<th>NAME</th>" +
        "\n<th>PHONE</th>" +
        "\n</tr></thead>";

function loadArray(array) {
    var stringObj = "\n<td>" + array.name + "</td>\n<td>" + array.phone + "</td>";
    return "<tr>" + stringObj + "</tr>";
}

postTable(persons.map(loadArray).join(""));

function postTable(tableBody) {
    console.log("\nOpgave 3.C: ");
    console.log("\n"+tableHead + "<tbody>" + tableBody + "</tbody>");
}