/** 
 * Represents the scooter customers are wanting to hire
 */

class scooter {
    scooterRef;
    chargeStatus;
    branchOwner;

    constructor (scooterRef, chargeStatus, branchOwner) {

        this.scooterRef = scooterRef
        this.chargeStatus = chargeStatus
        this.branchOwner = branchOwner   
    }
}

module.exports = scooter