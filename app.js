const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "white", "rgb(34, 162, 72)"];
const btn = document.getElementById("btn");
const currentColor = document.querySelector(".current-color");

btn.addEventListener("click", () => {
   let randomColor = getRandomNumber();

   currentColor.textContent = colors[randomColor];
   document.body.style.backgroundColor = colors[randomColor];
});

function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
}