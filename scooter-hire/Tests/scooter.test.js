const customer = require("../Src/Customer")
const Scooter = require("../Src/scooter")
const Location = require ("../Src/Hire-location")

/* importing the contents of classes to allow it to feature here (equivalent to java.util) */

describe('Scooter', function () { 
    test('SC001 charge status', function () {
        const scooter1 = new Scooter ('SC001', 98, 'Liverpool Street')
        expect(scooter1.chargeStatus).toEqual(98);
        // expect(() =>  new Scooter ('SC001', 98, 'Liverpool Street')).toThrowError('Insufficient Battery Level, unavailable to rent');
    })

    test('SC002 availability to rent', function () {
        const scooter2 = new Scooter ('SCOO2', 100, "London Paddington");
        expect(scooter2.branchOwner).toBeTruthy["London Paddington"];
        expect(scooter2.chargeStatus).toEqual(100);
    })
})
