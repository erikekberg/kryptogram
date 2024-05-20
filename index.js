const sentence = "De minsta handlingarna är alltid bättre äns de ädlaste avsikterna"
const container = document.getElementById("container");
let selected;
const letters = [];

const plainAlfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "Å", "Ä", "Ö"];
const cryptoAlfabet = [...plainAlfabet]

function shuffle(arr) {
    let index = arr.length;
    while (index != 0) {
  
      // Pick a remaining element...
      let rand = Math.floor(Math.random() * index);
      index--;
  
      // And swap it with the current element.
      [arr[index], arr[rand]] = [
        arr[rand], arr[index]];
    }
  }

shuffle(cryptoAlfabet);

console.log(plainAlfabet);
console.log(cryptoAlfabet);

function generateLetters() {
    for(let i = 0; i < sentence.length; i++) {
        if(sentence[i] == " ") {
            const space = document.createElement("div");
            space.className = "space";
            space.innerHTML = " ";
            container.appendChild(space);
        } else {
            const letter = document.createElement("div");
            letter.id = "letter " + i;
            letter.className = "letter";
            const hidden = document.createElement("div");
            const shown = document.createElement("div");
            hidden.innerHTML = "_";
            shown.innerHTML = cryptoAlfabet[plainAlfabet.indexOf(sentence[i].toUpperCase())];
            letter.appendChild(hidden);
            letter.appendChild(shown);
            container.appendChild(letter);
            letter.onclick = () => {
                selected = letter;
                updateVisual();
            }
            letters.push(letter);
        }
    }
}

generateLetters();

function updateVisual() {
    letters.forEach(l => {
        l.style.backgroundColor = "White"
    });
    selected.style.backgroundColor = "Grey";
}

document.addEventListener('keydown', function(event) {
    console.log(event);

    if(event.key == "Backspace") {
        selected.firstChild.innerHTML = "_";
    }

    if(plainAlfabet.includes(event.key.toUpperCase())) {
        selected.firstChild.innerHTML = event.key.toUpperCase();
    }
});