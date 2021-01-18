const System = require ("../Src/Booking-system")

/* importing the contents of classes to allow it to feature here (equivalent to java.util) */

describe('System', function () { 
    test('Confirmed availability', function () {
        const oxfordStreet = new System (1200, 1400, 20)
        expect(oxfordStreet.totalScootersAvailable).toEqual(20);
    })

    test('Error message when no capacity', function () {
        // const londonStratford = new System (1300, 1300, 0)
        // expect(londonStratford.totalScootersAvailable).toEqual(0);
        expect(() => new System (1300, 1300, -1)).toThrowError('There are currently no available scooters to hire, please try at an alternative branch');
    })
})

