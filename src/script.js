import poems from "./poems.json" assert {type: "json" };
console.log(poems)

const INTERVAL_LENGTH = 7500;

const colors = [
    "blue", 
    "green", 
    "yellow",
    "orange",
    "red",
    "purple",
]

function random(arr){
    let i = Math.floor(Math.random() * arr.length)
    console.log(i)
    return arr[i];
}

const content = document.getElementById("content");
const text = document.getElementById("text");

setInterval(() => {
    text.classList.add("fade");
    text.innerText = random(poems);

    content.className = random(colors);
}, INTERVAL_LENGTH)
