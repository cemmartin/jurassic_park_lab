class Park {
    constructor(name, price){
        this.name = name
        this.price = price
        this.collectionOfDinos = []
    }

    addDinos(dinosaur) {
        this.collectionOfDinos.push(dinosaur);
    }

    removeDinos(dinosaur) {
        const indexOfDinos = this.collectionOfDinos.indexOf(dinosaur);
        if (indexOfDinos === -1) {
            return;
        }
        this.collectionOfDinos.splice(indexOfDinos, 1)
    }


}


module.exports = Park