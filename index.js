const sentence = "this is a cryptogram"
const container = document.getElementById("container");
let selected;

function generateLetters() {
    for(let i = 0; i < sentence.length; i++) {
        const letter = document.createElement("div");
        letter.id = "letter " + i;
        letter.className = "letter";
        letter.innerHTML = sentence[i];
        container.appendChild(letter);
        letter.onclick = () => {
            selected = letter;
            updateVisual();
        }
    }
}

generateLetters();

function updateVisual() {
    selected.style.backgroundColor = "Grey";
}
