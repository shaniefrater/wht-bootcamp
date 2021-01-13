const Bag = required("./Bag.js")

describe('Bag', function () {
    test('has a weight', function () {
        const bag = new Bag(13);
        expect(bag.weight).toBe(13);
    });

    test('does not have a weight', function () {
        const bag = new Bag(0);
        expect(bag.weight).toThrowError("Error, weight not detected!");
    });
})
