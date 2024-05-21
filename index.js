const sentence = "Tandläkaren pekade på Lotta och sa: – Den här lilla fröken kunde jag inte göra något åt, för hon ville inte öppna munnen. – Den ungen får man skämmas för överallt, sa Jonas när vi gick hem. – Jag kände inte honom, sa Lotta. Jag kan inte gapa åt folk som jag inte känner"
const words = sentence.split(" ");
const container = document.getElementById("container");
let selected = [];
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
    for(let j = 0; j < words.length; j++) {
        const word = document.createElement("div");
        word.id = "word" + j
        word.className = "word";
        for(let i = 0; i < words[j].length; i++) {
            if(!plainAlfabet.includes(words[j][i].toUpperCase())) {
                const x = document.createElement("div");
                x.innerHTML = words[j][i];
                x.className = "letter";
                word.appendChild(x);
            } else {
                const letter = document.createElement("div");
                letter.id = "letter " + i;
                letter.className = "letter";
                const hidden = document.createElement("div");
                const shown = document.createElement("div");
                hidden.innerHTML = "_";
                shown.innerHTML = cryptoAlfabet[plainAlfabet.indexOf(words[j][i].toUpperCase())];
                letter.appendChild(hidden);
                letter.appendChild(shown);
                word.appendChild(letter);
                letter.onclick = () => {
                    findAllDupes(shown.textContent);
                    updateVisual();
                }
                letters.push(letter);
            }
        }
        container.appendChild(word);

    }
}

function findAllDupes(letter) {
    selected = [];
    for(let i = 0; i < letters.length; i++) {
        if(letters[i].children[1].textContent == letter) {
            selected.push(letters[i]);
        }
    }
}

generateLetters();

function updateVisual() {
    letters.forEach(l => {
        l.style.backgroundColor = "White"
    });
    selected.forEach(s => {
        s.style.backgroundColor = "Grey";
    });
}

document.addEventListener('keydown', function(event) {
    console.log(event);

    if(event.key == "Backspace") {
        selected.forEach(s => {
            s.firstChild.innerHTML = "_";
        })
    }

    if(plainAlfabet.includes(event.key.toUpperCase())) {
        selected.forEach(s => {
            s.firstChild.innerHTML = event.key.toUpperCase();
        })
    }
});