let h2 = document.querySelector("h2");
console.dir(h2.innerText+" from Apna College");

h2.innerText=h2.innerText+" from Apna College";
console.dir(h2.innerText);

let divs = document.querySelectorAll(".box")
console.log(divs);
console.log(divs[0]);
divs[0].innerText = "New first"
divs[1].innerText = "New Second"