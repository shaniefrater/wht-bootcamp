// customers for scooter-hire

class Customer {
    customerName;
    customerEmail;
    customerNumber; 
    customerUsername;
    scooterRef;

    constructor (customerName, customerEmail, customerNumber, customerUsername, scooterRef) {

        if (customerNumber.length > 11) {
        throw new Error ("Number input incorrectly")
        }

        this.customerName = customerName
        this.customerEmail = customerEmail
        this.customerNumber = customerNumber
        this.customerUserName = this.customerUsername
        this.scooterRef = scooterRef
    }
}

module.exports = Customer