const {expect} = require("@jest/globals");
const Bag = required ("./Bag.js")

describe('Bag', function () {
    test('has a weight', function () {
        const bag = new Bag(13);
        expect(bag.weight).toBe(13);
    });

    test('does not have a weight', function () {
        expect(() => new Bag()).toThrowError("Error, weight not detected!");
    });
})
