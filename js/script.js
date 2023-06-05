var circle = document.getElementById("circle");
var up = document.getElementById("upBtn");
var down = document.getElementById("downBtn");

// var rotateValue = circle.style.transform;
var rotateSum;

up.addEventListener("click", () =>{
    rotateSum = circle.style.transform + "rotate(-90deg)";
    circle.style.transform = rotateSum;
});
down.addEventListener("click", () =>{
    rotateSum = circle.style.transform + "rotate(90deg)";
    circle.style.transform = rotateSum;
});




// up.addEventListener("click", () =>{
//     rotateSum = rotateValue + "rotate(-90deg)";
//     circle.style.transform = rotateSum;
//     rotateValue = rotateSum;
// });
// down.addEventListener("click", () =>{
//     rotateSum = rotateValue + "rotate(90deg)";
//     circle.style.transform = rotateSum;
//     rotateValue = rotateSum;
// });
