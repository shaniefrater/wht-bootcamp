const ChargeStatus = require ("../Src/ChargeStation")

/* importing the contents of classes to allow it to feature here (equivalent to java.util) */

describe('ChargeStatus', function () { 
    test('Calculation of total successful', function () {
        const camdenHighStreet = new ChargeStatus ('Camden High Street', 25, 14)
        camdenHighStreet.getTotal ()
        expect(camdenHighStreet.totalAvailable).toEqual(11);
    })

    test('Total available scooters confirmed', function () {
        const liverpoolStreet = new ChargeStatus ('Liverpool Street', 30, 8)
        liverpoolStreet.getTotal ()
        expect(liverpoolStreet.totalAvailable).toEqual(22);
        expect(liverpoolStreet.unavailableToRent).toEqual(8);
        expect(liverpoolStreet.capacity).toEqual(30);
    })
})
