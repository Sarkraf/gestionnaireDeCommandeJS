import { Commande, drinks, meats, meatsForSizes, sauces, sizesAndPrices, supplements } from "./commandes.js";

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomMeatsArray(inputSize) {
    let meatsArray = [];
    const numberMeats = meatsForSizes[inputSize];
    for (let i = 0; i < numberMeats; i++) {
        meatsArray.push(meats[generateRandomNumber(5)]);
    }
    return meatsArray;
}

function generateRandomSaucesArray() {
    let saucesArray = [];
    const numberSauces = 2;
    for (let i = 0; i < numberSauces; i++) {
        saucesArray.push(sauces[generateRandomNumber(6)]);
    }
    return saucesArray;
}

function generateRandomSupplementsArray() {
    let supplementsArray = [];
    let numbersupplements = generateRandomNumber(5);
    if (numbersupplements != 0) {
        for (let i = 0; i < numbersupplements; i++) {
            supplementsArray.push(supplements[generateRandomNumber(4)]);
        }
    } else supplementsArray.push(supplements[4]);
    return supplementsArray;
}

export function generateMockCommande() {
    const inputSize = Object.keys(sizesAndPrices)[generateRandomNumber(Object.keys(sizesAndPrices).length)];
    const inputMeats = generateRandomMeatsArray(inputSize);
    const inputSauces = generateRandomSaucesArray();
    const inputDrink = drinks[generateRandomNumber(6)];
    const inputSupplement = generateRandomSupplementsArray();

    return new Commande(inputSize, inputMeats, inputSauces, inputSupplement, inputDrink);
}
