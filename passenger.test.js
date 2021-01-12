const { test } = require('@jest/globals')
const { describe } = require('yargs')

const Bag = require('./Bag')
const Passenger = require('./Passenger')

/* importing the contents of the passenger class to allow it (java.util) */

describe('Passenger', function () {
    test('has a passport', function () {
        const person = new Passenger("Jane", "British");
        expect(person.passportType).toEqual("British");
        expect(person.name).toEqual("Jane");
    })
})