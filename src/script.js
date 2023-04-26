const poems = [
    "It's ironic——\nwhen I wrap my arms around her,\nI'm the one that feels protected",
    "Even\nif the day we met\nwould have never taken place,\nsomehow,\nsomeway,\nin another day,\nwe would have met\nand fallen in love\nlike the first day.",
    "Her dress\nwas the least\nof her outfit——\nno one\nwore a smile\nlike her.",
    "The light of the moon\nfailed in comparison\nto the light\nof her soul.",
    "If I were a poet,\nI would write a book,\nfilled with poems and stories\nof the love\nyou have made me feel.",
    "If one could\ncapture the\nbrightness of all the stars\nin the night sky\nyour smile would outshine it.",
    "They say\n\"when a person falls in love\nthey feel as though \nthey have discovered \nlove for the first time\"\nNobody has ever felt\nthe way I feel\nabout you."
]

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
    return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const text = document.getElementById("text");
    
    window.setInterval(() => {
        text.classList.add("fade");
        text.innerText = random(poems);
    
        content.className = random(colors);
    }, INTERVAL_LENGTH)

})
