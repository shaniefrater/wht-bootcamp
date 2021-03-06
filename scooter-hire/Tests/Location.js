const Location = require("../Src/Location.js")

/* importing the contents of the location class to allow it to feature here (equivalent to java.util) */

describe('Location', function () {
    var London = new Array("London Paddington", "London Stratford", "Oxford Street", "Liverpool Street", "Camden High Street");

    test('Hire Location', function () {
        const londonPaddington = new Location("London Paddington", "hire-londonpaddington@scooterhire.net", "100010", 10);
        expect(londonPaddington.branchRefNo).toEqual("100010");
        expect(londonPaddington.scootersAvailable).toEqual(10);
    })

    test('Ref number', function () {
        const londonOxfordStreet = new Location("Oxford Street", "hire-oxfordstreet@scooterhire.net", "100012", 17);
        expect(londonOxfordStreet.branchRefNo).toEqual("100012");
        expect(londonOxfordStreet.scootersAvailable).toEqual(17);
        expect(londonOxfordStreet.branchName).toEqual("Oxford Street");
    })

    test('Scooter Availability', function () {
        // const liverpoolStreet = new Location ("Liverpool Street", "hire-liverpoolstreet@scooterhire.net", "100011", -1);
        expect(() => new Location("Liverpool Street", "hire-liverpoolstreet@scooterhire.net", "100011", -1)).toThrowError('There are currently no available scooters to hire, please try again later or suggest an alternative branch');
    })
})
