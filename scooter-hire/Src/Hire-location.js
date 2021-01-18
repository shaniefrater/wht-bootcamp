/** 
 * Display all locations available where a customer can hire scooters
 */

class Location {

    branchName;
    branchEmail;
    branchRefNo;
    scootersAvailable;

    /** 
     * Constructs an instance of locations listed for the customer when selecting a location
     
     * @param {String} branchName - Name of London Branch
     * @param {String} branchEmail - Email address for particular branch
     * @param {String} branchRefNo - Contact Number
     * @param {String} scootersAvailable - Scooters available for hire
    */
    constructor (branchName, branchEmail, branchRefNo, scootersAvailable) {

        if (scootersAvailable < 0) {
            throw new Error ("There are currently no available scooters to hire, please try again later or suggest an alternative branch")
            }

        this.branchname = branchName
        this.branchEmail = branchEmail
        this.branchRefNo = branchRefNo
        this.scootersAvailable = scootersAvailable
    }
}

module.exports = Locations;