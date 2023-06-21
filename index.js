const slideValue = document.querySelector("span");

const inputSlider = document.querySelector("input");

inputSlider.oninput = (function () {
    let value = inputSlider.value;
    slideValue.textContent = value + "%";
})

const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const audioPlayer = document.querySelector("#audioPlayer");

// console.log(playButton);
// console.log(playIcon);
// console.log(pauseIcon);
// console.log(audioPlayer);
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