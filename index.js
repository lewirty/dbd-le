const slideValue = document.querySelector("span");

const inputSlider = document.querySelector("input");

inputSlider.oninput = (function () {
    let value = inputSlider.value;
    slideValue.textContent = value + "%";
    audioPlayer.volume = value / 100;
})

const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const audioPlayer = document.querySelector("#audioPlayer");

let playing = false;

playButton.addEventListener("click", function () {
    if (playing) {
        audioPlayer.pause();
        playIcon.style.display = "inline-block";
        pauseIcon.style.display = "none"; 
    } else {
        audioPlayer.play();
        playIcon.style.display = "none"; 
        pauseIcon.style.display = "inline-block"; 
    }
    playing = !playing;
});

let killers = [
    "The Hillbilly",
    "The Nurse",
    "The Shape",
    "The Hag",
    "The Doctor",
    "The Clown",
    "The Spirit",
    "The Legion",
    "The Ghost Face",
    "The Demogorgon",
    "The Oni",
    "The Deathslinger",
    "The Executioner",
    "The Blight",
    "The Twins",
    "The Trickster",
    "The Nemesis",
    "The Cenobite",
    "The Artist",
    "The Onryõ",
    "The Dredge",
    "The Mastermind",
    "The Knight",
    "The Skull Merchant",
    "The Singularity",
];

let sortedNames = killers.sort();

let input = document.querySelector(".inputAnswer")

input.addEventListener('keyup', function (e) {
    removeElements();
    for (let i of sortedNames) {
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != '') {
            let listItem = document.createElement('li');

            listItem.classList.add('list-items');
            listItem.style.cursor = 'pointer';
            listItem.setAttribute('onclick', "displayNames('" + i + "')")

            let word = "<b>" + i.substr(0,input.value.length) + "</b>";
            word+= i.substr(input.value.length);

            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    input.value = value;
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach(function(item) {
        item.remove();
    })
}