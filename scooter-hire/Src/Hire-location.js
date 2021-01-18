/** 
 * Display all locations available where a customer can hire scooters
 */

class Locations {

    /** 
     * Locations listed when choosing to hire a scooter
     
     * @param {String} branchName
     * @param {String} branchEmail
     * @param {String} branchRefNo
     * @param {String} scootersAvailable
    */

    branchName;
    branchEmail;
    branchRefNo;
    scootersAvailable;

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