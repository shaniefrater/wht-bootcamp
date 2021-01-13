// customers for scooter-hire

class customer {
    customerName;
    customerEmail;
    customerNumber; 
    scooterRef;

    constructor (customerName, customerEmail, customerNumber, scooterRef) {

        if (!customerNumber) {
        throw new Error ("Number input incorrectly")
        }

        this.customerName = customerName
        this.customerEmail = customerEmail
        this.customerNumber = customerNumber
        this.scooterRef = scooterRef
    }
}

module.exports = customer