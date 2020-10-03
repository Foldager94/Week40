import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById('tb');
const tb2 = document.getElementById('tb2');


//Opgave 1
const url = 'https://vd52024.dk/Week39_RestWithJax/api/person/';
fetch(url + "all")
.then(res=>fetchWithErrorCheck(res))
.then((data)=>{
    console.log(data)

    const newdata = data.all;

    console.log(newdata)
    const trs = newdata.map((user)=>{
        return `<tr><td>${user.id}</td><td>${user.fName}</td><td>${user.lName}</td><td>${user.phone}</td><td>${user.street}</td><td>${user.city}</td><td>${user.zip}</td></tr>`;
    });
    
    const trStr = trs.join('');
    tb.innerHTML = trStr;
    console.log("test"+trStr)
});

//Opgave 2
function getUserById(id) {
    const url2 = url + id;
    fetch(url + id)
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        console.log(data)
               
        tb2.innerHTML = `<tr><td>${data.id}</td><td>${data.fName}</td><td>${data.lName}</td><td>${data.phone}</td><td>${data.zip}</td></tr>`;
    });
}


    getUserById(1);

//Opgave3
document.getElementById("adduser").addEventListener("click", function(e){
    e.preventDefault();
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const phone = document.getElementById("phone").value;
    const zip = parseInt(document.getElementById("zip").value);
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;

    console.log(zip);



    const options = {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fName: fName,
            lName: lName,
            phone: phone,
            street : street,
            city : city,
            zip: zip
        })
     }
     console.log(options)

    fetch(url, options);

    



})


//Opgave 4

document.getElementById("edituser").addEventListener("click", function(e){
    e.preventDefault();
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const phone = document.getElementById("phone").value;
    const zip = parseInt(document.getElementById("zip").value);
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const id = document.getElementById("id").value;



    const options = {
        method: "PUT",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fName: fName,
            lName: lName,
            phone: phone,
            street : street,
            city : city,
            zip: zip
        })
     }
     console.log(options)

    fetch(url + id , options);



})




//Opgave 5

document.getElementById("deluser").addEventListener("click", function(e){
    e.preventDefault();
    let id = document.getElementById("id").value;

    let options = {
        method: "DELETE",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
     }
     fetch(url+id, options);

})






function fetchWithErrorCheck(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}