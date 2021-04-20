import { generateMockCommande } from "./mock.js";



for (let i = 0; i < 100; i++) {
    try {
        console.log(generateMockCommande());
    } catch (error) {
        console.error(error);
    }
}
