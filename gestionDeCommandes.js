const sizesAndPrices = { M: 6, L: 7, XL: 9, XXL: 14 };
const meatsForSizes = { M: 1, L: 2, XL: 3, XXL: 4 };
const meats = ['Kebab', 'Poulet', 'Steack', 'Kefta', 'Cordon Bleu'];
const sauces = ['Mayo', 'Algérienne', 'Curry', 'Blanche', 'Barbecue', 'None'];
const drinks = ['Coca', 'Fanta', 'Oasis', 'Sprite', 'Vittel', 'None'];
const supplements = ['Cheddar', 'Boursin', 'Oeuf', 'Frites', 'None'];

//----
let order = 0;
class Commande {

    constructor(size, meats, sauces, supplements, drink) {


        this.order = this.addNewOrderNumber();
        this.size = size;
        this.meats = meats;
        this.sauces = sauces;
        this.supplements = supplements;
        this.drink = drink;
        this.total = this.defineFinalPrice() + " €";
        this.checkNumberMeatsOk();
        this.checkNumberSaucesOk();
        this.neverRepeatChoiceSupplements();
        this.neverRepeatChoiceSauces();
        this.neverRepeatChoiceMeats();
    }

    neverRepeatChoiceSupplements() {
        for (let i = 0; i < this.supplements.length; i++) {
            if (this.supplements.indexOf(this.supplements[i]) != this.supplements.lastIndexOf(this.supplements[i])) {
                throw "You can't choice twice the same supplements";
            }
        }

    }

    neverRepeatChoiceSauces() {
        for (let i = 0; i < this.sauces.length; i++) {
            if (this.sauces.indexOf(this.sauces[i]) != this.sauces.lastIndexOf(this.sauces[i])) {
                throw "You can't choice twice the same sauces";
            }
        }

    }
    
    neverRepeatChoiceMeats() {
        for (let i = 0; i < this.meats.length; i++) {
            if (this.meats.indexOf(this.meats[i]) != this.meats.lastIndexOf(this.meats[i])) {
                throw "You can't choice twice the same meats";
            }
        }

    }

    checkNumberMeatsOk() {
        switch (this.size) {
            case 'M':
                if (this.meats.length != 1) {
                    throw 'To many differents meats';
                }
                break;

            case 'L':
                if (this.meats.length != 2) {
                    throw 'To many differents meats';
                }
                break;

            case 'XL':
                if (this.meats.length != 3) {
                    throw 'To many differents meats';
                }
                break;

            case 'XXL':
                if (this.meats.length != 4) {
                    throw 'To many differents meats';
                }
                break;

            default:
                throw 'Invalide Size String';
                break;
        }
    }

    checkNumberSaucesOk() {
        if (this.sauces.length > 2) {
            throw 'To many differents sauces';
        }
    }

    defineFinalPrice() {

        let result = sizesAndPrices[this.size];
        result += (this.supplements != ['None']) ? this.supplements.length : 0;
        if (this.drink != 'None') {
            result += (this.drink == 'Vittel') ? 0.5 : 1;
        }
        return result;
    }

    addNewOrderNumber() {
        order++;
        return 'N°' + order;
    }
}

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

function generateMockCommande() {
    const inputSize = Object.keys(sizesAndPrices)[generateRandomNumber(Object.keys(sizesAndPrices).length)];
    const inputMeats = generateRandomMeatsArray(inputSize);

    const inputSauces = generateRandomSaucesArray();

    const inputDrink = drinks[generateRandomNumber(6)];

    const inputSupplement = generateRandomSupplementsArray();

    return new Commande(inputSize, inputMeats, inputSauces, inputSupplement, inputDrink);
}

for (let i = 0; i < 100; i++) {
    try {
        console.log(generateMockCommande());
    } catch (error) {
        console.error(error);
    }
    
}
