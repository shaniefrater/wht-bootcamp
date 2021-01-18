/** 
 * Represents charging stations for scooters
 */

class chargeStatus {
    
    branchName;
    capacity;
    unavailableToRent;
    totalAvailable

     /** 
     * Constructs an instance and understanding of what scooters are available to hire
     * @param {String} branchName - Branch name being looked into 
     * @param {String} capacity - Total capacity within branch
     * @param {String} unavailableToRent - No. of scooters unavailable to rent due to insufficient battery levels
     * @param {String} totalAvailable - No. of scooters available with 100% battery
    */
    constructor (branchName, capacity, unavailableToRent) {

        this.branchName - branchName
        this.capacity = capacity
        this.unavailableToRent = unavailableToRent
        this.totalAvailable = this.totalAvailable
    }

    getTotal () {
        this.totalAvailable = this.capacity - this.unavailableToRent
    }
 }

module.exports = chargeStatus;
