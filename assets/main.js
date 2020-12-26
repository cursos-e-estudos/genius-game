let orderGame = [];
let orderSelected = [];

let score = 0;

let sorteio = 0;

// 0 - verde
//1 - vermelho
//2 - amarelho
//3 - azul

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

const pontosDiv = document.querySelector(".points");


//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    orderGame[orderGame.length] = colorOrder;

    orderSelected = [];

    for(let i in orderGame) {
        let elementColor = createColorElement(orderGame[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor selecionada
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os clicks do jogador foi igual ao sorteio
let checkOrder = () => {
    for (let i in orderSelected)
    {
        if(orderSelected[i] != orderGame[i])
        {
            gameOver();
            break;
        }
    }
    if(orderSelected.length == orderGame.length)
    {
        //alert(`Pontuação: ${score} \n Você acertou!`);
        pontosDiv.innerHTML = "Pontos: " + score;
        nextLevel();
    }
}

//função para clicar e adicionar ao array de selected
let  click = (color) => {
    orderSelected[orderSelected.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250);

    
}

//função que returna a cor
let createColorElement = (color) => {
    if(color == 0)
    {
        return green;
    }
    else if(color == 1)
    {
        return red;
    }
    else if(color == 2)
    {
        return yellow;
    }
    else if(color == 3)
    {
        return blue;
    }
};

let nextLevel = () => {
    score++;

    shuffleOrder();
}

let gameOver = () => {
    alert("Pontuação: " + score + "\n Você perdeu! \n Clique ok para reiniciar o jogo");
    order = [];
    orderSelected = [];

    location.reload(); 
}

let playGame = () => {
    alert("Bem-vindo ao Genius do Biel, configurando tudo!");
    score = 0;
    nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();