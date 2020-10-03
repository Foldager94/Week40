import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
// import navigation from "./navigation";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

// // Solution 1
// document.getElementById('1').innerHTML = 'TEST11111111111111';

// // Solution 2
// document.getElementById('2').innerHTML = 'TEST2222222222222222';


