//const { test } = require('@jest/globals')
//const { describe } = require('yargs')

const Bag = require('./bag.js')
const Passenger = require('./passenger.js')

/* importing the contents of the passenger class to allow it (java.util) */

describe('Passenger', function () {
    test('Passenger is able to fly', function () {
        const Jane = new Passenger("Jane", "1051005", "British");
        expect(Jane.passportType).toEqual("British");
        expect(Jane.name).toEqual("Jane");
    })
})
