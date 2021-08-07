export class Cocktail{
    id: string;
    name: string;
    img: string;
    instructions: string;

    constructor(idDrink: string, strDrink: string, strDrinkThumb: string, strInstructions: string) {
        this.id = idDrink;
        this.name = strDrink;
        this.img = strDrinkThumb;
        this.instructions = strInstructions;
    }
}
