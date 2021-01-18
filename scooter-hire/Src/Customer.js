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
     
     * @param {String} customerName
     * @param {String} customerEmail
     * @param {String} customerNumber
     * @param {String} customerUsername
     * @param {String} scooterRef
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