const slideValue = document.querySelector("span");

const inputSlider = document.querySelector("input");

inputSlider.oninput = (function () {
    let value = inputSlider.value;
    slideValue.textContent = value + "%";
})

const playButton = document.querySelector("#playButton");

const audioPlayer = document.querySelector("#audioPlayer");

const playIcon = document.querySelector("#playIcon")

let playing = false;

playButton.addEventListener("click", function () {
    if (playing) {
        audioPlayer.pause();
        playIcon.setAttribute("data-icon", "play");
    } else {
        audioPlayer.play();
        playIcon.setAttribute("data-icon", "pause");
    }

    playing = !playing;
});

console.log(playButton, audioPlayer, playIcon)

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