// HTML element
const elResult = document.querySelector("#result");
const elArray = document.querySelector("#array");


let number = [1, 3, 5, 9];
let result = 0;

function numbersSum(item) {
    for (let i = 0; i < item.length; i++) {
        result = result + item[i];
    }
};

numbersSum(number);

elArray.textContent = number;
elResult.textContent = result;