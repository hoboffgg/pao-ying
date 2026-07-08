const computerChoice = document.getElementById("computerChoice");
const resultText = document.getElementById("result");

const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

const randomButton = document.getElementById("random");
const imagechange = document.getElementById("image-change");
const textChange = document.getElementById("text-change");

const choices = [ 'hammer.png','scissors.png','paper.png'];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random()*choices.lentgth);
    return choice[randomIndex];
}

randomButton.addEventListener('click',function()(
    const selectedImage = getRandomchoice();

    imagechange.src = 'image/' + selectedImage;

    const resulttext = selectedImage.raplace('.png','');
    textChange.innerText = "คุณได้: "+ resultText;


));