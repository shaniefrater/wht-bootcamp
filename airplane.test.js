const Airplane = require("./airplane")


/* importing the contents of the passenger class to allow it (equivalent to java.util) */

describe('Airplane'), function () {
    test('Airplane flight Departure Information', function () {
        const flightOne = new Airplane ("15011998SF", "Prague", "London Gatwick Airport", "Boeing747");
        expect(flightOne.flightDestination).toEqual("Prague");
        expect(flightOne.flightType).toEqual("Boeing747");
    })
}
