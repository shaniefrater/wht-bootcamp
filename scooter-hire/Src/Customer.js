/** 
 * Represents customers wanting to hire a scooter
 */
  
class Customer {

    customerName;
    customerEmail;
    customerNumber; 
    customerUsername;
    scooterRef;

    /** 
     * Constructs an instance of customer information ready to process
     
     * @param {String} customerName - Full name of customer
     * @param {String} customerEmail - Full email address
     * @param {String} customerNumber - Primary contact number
     * @param {String} customerUsername - Username
     * @param {String} scooterRef - Scooter referenced with account (if any)
    */
    constructor (customerName, customerEmail, customerNumber, customerUsername, scooterRef) {

        if (customerNumber.length > 11) {
        throw new Error ("Number input incorrectly")
        }

        this.customerName = customerName
        this.customerEmail = customerEmail
        this.customerNumber = customerNumber
        this.customerUserName = customerUsername
        this.scooterRef = scooterRef
    }
}

module.exports = Customer