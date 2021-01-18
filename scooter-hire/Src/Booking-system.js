/** 
 * Represents the confirmation process in which a customer receives when booking is complete
 */

class System {
    
    timeAvailable;
    timeRequested;
    totalScootersAvailable;

     /** 
     * Constructs an instance of booking confirmation for the customer
     * @param {String} timeAvailable - Times available on database
     * @param {String} timeRequested - Requested time by Customer
     * @param {String} totalScootersAvailable - Number of scooters available

    */
    constructor (timeAvailable, timeRequested, totalScootersAvailable) {

        this.timeAvailable = timeAvailable
        this.timeRequested = timeRequested
        this.totalScootersAvailable = totalScootersAvailable

        if (totalScootersAvailable < 0) {
            throw new Error ("There are currently no available scooters to hire, please try at an alternative branch")
            }
    }
 }

 module.exports = System