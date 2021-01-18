/** 
 * Represents the confirmation process in which a customer receives when booking is complete
 */

 class Confirmation {
    
    customerUserName;
    fullName;
    scooterAssigned;
    bookingRef;
    finalPrice;
    dateBooked;
    hoursRented

     /** 
     * Constructs an instance of booking confirmation for the customer
     * @param {String} customerUserName - Username of customer
     * @param {String} fullName - Full name
     * @param {String} scooterAssigned - Scooter Ref number
     * @param {String} bookingRef - Reference number associated with each particular booking
     * @param {String} dateBooked - Confirmation of date booked
     * @param {number} hoursRented - Hours scooter is out for rent
    */
    constructor (customerUserName, fullName, scooterAssigned, bookingRef, dateBooked, hoursRented) {

        this.customerUserName = customerUserName
        this.fullName = fullName
        this.scooterAssigned = scooterAssigned
        this.bookingRef = bookingRef
        this.dateBooked = dateBooked
        this.hoursRented = hoursRented
    
    }

    calculatePrice () {
        this.finalPrice = this.hoursRented * 20
    }
 }

 module.exports = Confirmation