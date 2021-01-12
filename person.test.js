const { expect, test } = require('@jest/globals');
const person = require('./person');

describe('person', () => {

    test('check name', () => {
        expect(person.william.firstName).toEqual('William');
        expect(person.william.lastName).toEqual('Windsor');
    });
});
