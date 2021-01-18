const Confirmation = require ("../Src/Booking-confirmation")

/* importing the contents of classes to allow it to feature here (equivalent to java.util) */

describe('Confirmation', function () { 
    test('Booking Ref confirmed', function () {
        const janeDoe = new Confirmation ('jDoe101', 'Jane Doe', 'SC10001', 'BOO123','18/01/2021')
        expect(janeDoe.bookingRef).toEqual("BOO123");
        expect(janeDoe.customerUserName).toEqual("jDoe101");
        expect(janeDoe.fullName).toEqual("Jane Doe");
        expect(janeDoe.scooterAssigned).toEqual("SC10001");
    })

    test('Calculation of Price is successful', function () {
        const lSimpson = new Confirmation ('lsimpson', 'Lisa Simpson', 'SC10002', 'BOO124','18/01/2021', 2.5);
        lSimpson.calculatePrice ()
        expect(lSimpson.finalPrice).toEqual(50);
    })
})