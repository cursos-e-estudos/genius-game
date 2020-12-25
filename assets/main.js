let orderGame = [];
let orderSelected = [];

let score = 0;

// 0 - verde
//1 - vermelho
//2 - amarelho
//3 - azul

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.lenght] = colorOrder;

    orderSelected = [];

    for (let i in order)
    {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, time) => {
    let time = time * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, time - 200);
    setTimeout(() => {
        element.classList.remove("selected");
    });
}