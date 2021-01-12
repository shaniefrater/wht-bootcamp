/**
 * Represents a bag taken as either hand or cabin luggage on an aircraft
 */
class Bag {
 
    colour;
    weight; // not required

    /**
     * Creates a Bag.
     * 
     * @param {number} weight - the weight of the bag
     */
    constructor(weight, colour) {
        if (!weight) {
            throw new Error('bag must have a weight');
        }
        this.weight = weight;
    }
}

module.exports = Bag;
