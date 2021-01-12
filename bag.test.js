const { redBright } = require("chalk");

const Bag = required ("./Bag.js")

describe('Bag', function () {
    test('has a weight', function () {
        const bag = new Bag(13, 'pink');
        expect(bag.weight).toBe(13);
    });

    test('does not have a weight', function () {
        expect(() => new Bag()).toThrowError("Error, weight not detected!");
    });
})

const shaniesBag = new Bag (0, 'red')
expect(shaniesBag.weight).toBe(0);