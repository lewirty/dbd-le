let correctKiller = 'The Clown';

let killerPortrait = document.querySelector("#killer-portrait")

let rightAnswerAudio = document.querySelector("#confetti");

let submitIcon = document.querySelector(".submitBtn");

let input = document.querySelector(".inputAnswer")

input.addEventListener('keyup', function() {
    removeElements();
    let counter = 0;

    for (let i of sortedNames) {
        if (i.toLowerCase().includes(input.value.toLowerCase())
            && input.value != '') {

            let listItem = document.createElement('li');

            listItem.classList.add('list-items');
            listItem.setAttribute('onclick', "displayNames('" + i + "')")

            let word = i.replace(new RegExp(input.value, 'gi'), "<b>$&</b>");

            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);

            listItem.addEventListener('click', function removeList() {
                listItem.remove();
                input.select();
            })

            counter++;
            if (counter === 5) break;
        }
    }
});

const slideValue = document.querySelector("#volume");

const inputSlider = document.querySelector("#slider");

inputSlider.oninput = (function () {
    let value = inputSlider.value;
    slideValue.textContent = value + "%";
    audioPlayer1.volume = value / 100;
    audioPlayer2.volume = value / 100;
    audioPlayer3.volume = value / 100;
    audioPlayer4.volume = value / 100;
})

const playButton1 = document.querySelector("#playButton1");
const playButton2 = document.querySelector("#playButton2");
const playButton3 = document.querySelector("#playButton3");
const playButton4 = document.querySelector("#playButton4");

const playIcon1 = document.querySelector("#playIcon1");
const pauseIcon1 = document.querySelector("#pauseIcon1");
const audioPlayer1 = document.querySelector("#audioPlayer1");

const playIcon2 = document.querySelector("#playIcon2");
const pauseIcon2 = document.querySelector("#pauseIcon2");
const audioPlayer2 = document.querySelector("#audioPlayer2");
const lockIcon1 = document.querySelector("#lockIcon1");

const playIcon3 = document.querySelector("#playIcon3");
const pauseIcon3 = document.querySelector("#pauseIcon3");
const audioPlayer3 = document.querySelector("#audioPlayer3");
const lockIcon2 = document.querySelector("#lockIcon2");

const playIcon4 = document.querySelector("#playIcon4");
const pauseIcon4 = document.querySelector("#pauseIcon4");
const audioPlayer4 = document.querySelector("#audioPlayer4");
const lockIcon3 = document.querySelector("#lockIcon3");

function playAndPause(audioPlayer, playIcon, pauseIcon, lockIcon) {
    let playing = false;

    return function () {
        if (playing) {
            audioPlayers.forEach(function(player) {
                player.pause();
            })
            audioPlayer.pause();
            playIcon.style.display = "inline-block";
            pauseIcon.style.display = "none";
        } else {
            audioPlayers.forEach(function(player) {
                player.pause();
            })
            audioPlayer.play();
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline-block";
        } if (lockIcon && lockIcon.style.display === 'inline-block') {
            audioPlayer.pause();
            lockIcon.style.display = "inline-block";
            playIcon.style.display = "none";
            pauseIcon.style.display = "none";
        }

        playing = !playing;
    }
};

let playAndPause1 = playAndPause(audioPlayer1, playIcon1, pauseIcon1);
let playAndPause2 = playAndPause(audioPlayer2, playIcon2, pauseIcon2, lockIcon1);
let playAndPause3 = playAndPause(audioPlayer3, playIcon3, pauseIcon3, lockIcon2);
let playAndPause4 = playAndPause(audioPlayer4, playIcon4, pauseIcon4, lockIcon3);
let audioPlayers = [audioPlayer1, audioPlayer2, audioPlayer3, audioPlayer4];

playButton1.addEventListener('click', playAndPause1);
playButton2.addEventListener('click', playAndPause2);
playButton3.addEventListener('click', playAndPause3);
playButton4.addEventListener('click', playAndPause4);

let form = document.querySelector("form");

let wrongAnswers = 0;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedOption = input.value;
    if (selectedOption === correctKiller) {
        audioPlayers.forEach(function(player) {
            player.pause();
        })

        wrongAnswers = 5;
    }
    if (wrongAnswers === 5) {
        playButton1.style.color = "green";
        playButton2.style.color = "green";
        playButton3.style.color = "green";
        playButton4.style.color = "green";
        pauseIcon1.style.display = "none";
        pauseIcon2.style.display = "none";
        pauseIcon3.style.display = "none";
        pauseIcon4.style.display = "none";
        lockIcon1.style.display = "none";
        lockIcon2.style.display = "none";
        lockIcon3.style.display = "none";
        playIcon2.style.display = "inline-block";
        playIcon3.style.display = "inline-block";
        playIcon4.style.display = "inline-block";
        input.style.display = "none";
        submitIcon.style.display = "none";
        killerPortrait.style.display = "block";
        killerPortrait.classList.add('certo')
        playAudioConfetti();
    } else {
        audioPlayers.forEach(function(player) {
            player.pause();
        })

        input.value = '';
        wrongAnswers++;
        console.log(wrongAnswers)
        if (wrongAnswers === 1) {
            playButton1.style.color = "red";
            pauseIcon1.style.display = "none";
            playIcon1.style.display = "inline-block"
            lockIcon1.style.display = "none";
            playIcon2.style.display = "inline-block";
        } 
        else {
            lockIcon1.style.display = "none";
            playIcon2.style.display = "none"
        }
        if (wrongAnswers === 2) {
            playButton2.style.color = "red";
            pauseIcon2.style.display = "none";
            playIcon2.style.display = "inline-block";
            lockIcon1.style.display = "none";
            lockIcon2.style.display = "none";
            playIcon3.style.display = "inline-block";
        } 
        else {
            pauseIcon2.style.display = "none";
            lockIcon1.style.display = "none";
            playIcon3.style.display = "none";
        }
        if (wrongAnswers === 3) {
            playButton3.style.color = "red";
            pauseIcon3.style.display = "none";
            playIcon3.style.display = "inline-block";
            lockIcon1.style.display = "none";
            lockIcon2.style.display = "none";
            lockIcon3.style.display = "none";
            playIcon2.style.display = "inline-block";
            playIcon4.style.display = "inline-block";
        }
        if (wrongAnswers === 4) {
            playButton4.style.color = "red";
            pauseIcon4.style.display = "none";
            playIcon4.style.display = "inline-block";
            lockIcon1.style.display = "none";
            lockIcon2.style.display = "none";
            lockIcon3.style.display = "none";
            playIcon2.style.display = "inline-block";
            playIcon3.style.display = "inline-block";
            input.style.display = "none";
            killerPortrait.style.display = "block";
            killerPortrait.classList.add('errado')
            submitIcon.style.display = "none";
        }
        else {
            submitIcon.style.display = "inline-block";
        }
    }
})

function playAudioConfetti() {
    rightAnswerAudio.play();
}

let killers = [
    "Default Theme",
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


submitIcon.addEventListener('click', function() {
    preventDefault();
    input.form.submit();
});

function displayNames(value) {
    input.value = value;
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach(function (item) {
        item.remove();
    })
}