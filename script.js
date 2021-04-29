const plusOne = document.getElementById("+1");

const plusFive = document.getElementById("+5");

const minusOne = document.getElementById("-1");

const minusFive = document.getElementById("-5");

const lifeTotal = document.getElementById("life");

const resetLifeTotal = document.getElementById("resetLifeTotal")

let lifeNumber = 20;

lifeTotal.textContent = lifeNumber.toString();

function increaseByOne () {

    lifeNumber++;

    console.log("working");

    console.log(lifeNumber);

    lifeTotal.textContent = lifeNumber.toString();

}

function increaseByFive () {

    lifeNumber += 5;

    console.log("working");

    console.log(lifeNumber);

    lifeTotal.textContent = lifeNumber.toString();

}

function decreaseByOne () {

    lifeNumber--;

    console.log("working");

    console.log(lifeNumber);

    lifeTotal.textContent = lifeNumber.toString();
    
}

function decreaseByFive () {

    lifeNumber -= 5;

    console.log("working");

    console.log(lifeNumber);

    lifeTotal.textContent = lifeNumber.toString();
    
}

function resetLife () {

    lifeNumber = 20;

    lifeTotal.textContent = lifeNumber.toString();

}

plusOne.addEventListener("click", increaseByOne);

plusFive.addEventListener("click", increaseByFive);

minusOne.addEventListener("click", decreaseByOne);

minusFive.addEventListener("click", decreaseByFive);

resetLifeTotal.addEventListener("click", resetLife);