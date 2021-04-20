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
        this.total = this.defineFinalPrice();
        this.checkNumberMeatsOk();
        this.checkNumberSaucesOk();
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
        if (this.sauces.length > 2 ){
            throw 'To many differents sauces';
        }
    }

    defineFinalPrice() {

        let result = sizesAndPrices[this.size];
        result += (this.supplements != 'None') ? 1 : 0;
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

function generateMockCommande() {
    const inputSize = Object.keys(sizesAndPrices)[generateRandomNumber(Object.keys(sizesAndPrices).length)];
    const inputMeats = generateRandomMeatsArray(inputSize);

    const inputSauces = generateRandomSaucesArray();

    const inputDrink = drinks[generateRandomNumber(6)];

    const inputSupplement = supplements[generateRandomNumber(5)];

    return new Commande(inputSize, inputMeats, inputSauces, inputSupplement, inputDrink);
}

console.log(generateMockCommande());
// let commandes = [];

// commandes = commandes.map(element => {
//     try {
//         return new Commande(inputSize, inputMeats, inputSauce1, supplements[inputSupplement], drinks[inputDrink]);
//     } catch (error) {
//         console.error(error);
//     }
// });
// console.log(commandes);
//let commande1 = new Commande(inputSize, inputMeats, inputSauce1, supplements[inputSupplement], drinks[inputDrink])
//let commande2 = new Commande(inputSize, inputMeats, inputSauce1, supplements[inputSupplement], drinks[inputDrink])
