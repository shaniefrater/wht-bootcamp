const Airplane = require("./airplane")


/* importing the contents of the passenger class to allow it (equivalent to java.util) */

describe('Airplane', function () {
    test('Airplane flight Departure Information', function () {
        const flightOne = new Airplane ("15011998", "Prague", "London Gatwick Airport", "Boeing747");
        expect(flightOne.flightDestination).toEqual("Prague");
        expect(flightOne.flightType).toEqual("Boeing747");
    })
    test('Airplane flight Departure Information', function () {
                // expect(() => new Airport()).toThrowError('Flight must have type');
        try {
            const flightOne = new Airplane ("15011998", "Prague", "London Gatwick Airport"); 
            fail ();
            
        } catch (err) {
            console.log("Got an error");

        }

        // expect(flightOne.flightDestination).toEqual("Prague"); //change
        // expect(() => new Airplane()).toThrowError('Flight type not found'); //change
    })
})
