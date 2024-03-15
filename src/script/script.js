var storyElement = document.getElementById('story');
var choicesElement = document.getElementById('choices');
var restartButton = document.getElementById('restartButton');
var musicButton = document.getElementById('musicButton');
var backgroundMusic = document.getElementById('backgroundMusic');
var isMusicPlaying = true;
musicButton.addEventListener('click', function () {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        musicButton.textContent = '▶️';
    }
    else {
        backgroundMusic.play();
        isMusicPlaying = true;
        musicButton.textContent = '⏸️';
    }
});
var storyParts = [
    {
        text: 'Qual dos caminhos deseja seguir?', //PART 0
        choices: [
            { text: 'Ruínas Antigas', nextPart: 1 },
            { text: 'Clareiras Iluminadas', nextPart: 2 }
        ]
    },
    {
        text: 'Você está nas Ruínas Antigas. Dizem que aqui era onde protegiam o artefato mágico. Entâo ele deve estar por perto...', //PART 1
        choices: [
            { text: 'Seguir em frente', nextPart: 3 },
            { text: 'Seguir sem rumo', nextPart: 4 }
        ]
    },
    {
        text: 'Você encontra um urso ferido. O que você faz?', //PART 2
        choices: [
            { text: 'Tentar ajudar', condition: 'Math.random() < 0.5', nextPart: 5 },
            { text: 'Correr', nextPart: 6 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 3
        choices: [
            { text: 'Sim', nextPart: 4 },
            { text: 'Não', nextPart: 5 }
        ]
    },
    {
        text: 'O nome dele é Agar. Ele diz estar procurando o artefato, mas que se desecontrou de seu amigo, que é um cavalo falante. Ele diz saber onde está o artefato e precisa de sua ajuda para pegá-lo...', //PART 4
        choices: [
            { text: 'Seguir em frente', nextPart: 7 },
            { text: 'Tentar matá-lo para que só você domine o artefato 😈', nextPart: 8 }
        ]
    },
    {
        text: 'Você morreu pois de alguma forma ele descobriu que você também está em busca do artefato mágico kk', //PART 5
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 6
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 7
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 8
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 9
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 10
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 11
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 12
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 13
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 14
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 15
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 16
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 17
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 18
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 19
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 20
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
];
var currentStoryIndex = 0;
function displayStoryPart(storyPartIndex) {
    var storyPart = storyParts[storyPartIndex];
    storyElement.textContent = storyPart.text;
    choicesElement.innerHTML = '';
    storyPart.choices.forEach(function (choice, index) {
        var button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', function () { return selectChoice(index); });
        choicesElement.appendChild(button);
    });
}
function selectChoice(choiceIndex) {
    var _a;
    var choice = storyParts[currentStoryIndex].choices[choiceIndex];
    if (choice.condition && !eval(choice.condition)) {
        currentStoryIndex++;
    }
    else {
        currentStoryIndex = (_a = choice.nextPart) !== null && _a !== void 0 ? _a : 0;
    }
    displayStoryPart(currentStoryIndex);
}
restartButton.addEventListener('click', function () {
    currentStoryIndex = 0;
    displayStoryPart(currentStoryIndex);
});
backgroundMusic.play(); // Inicia a música de fundo ao carregar a página
displayStoryPart(currentStoryIndex);