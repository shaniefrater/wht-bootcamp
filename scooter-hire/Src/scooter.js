/** 
 * Represents the scooter customers are wanting to hire
 */

class Scooter {

    scooterRef;
    chargeStatus;
    branchOwner;

    /** 
     * Creates an instance of information regarding each individual scooter
     
     * @param {String} scooterRef - Reference number associated with particular scooter
     * @param {String} chargeStatus - Percentage of charge left on scooter
     * @param {String} branchOwner - Which branch each referenced scooter belongs to
    */
    constructor (scooterRef, chargeStatus, branchOwner) {

        if (chargeStatus < 100)
        throw new Error ('Insufficient Battery Level, unavailable to rent')

        this.scooterRef = scooterRef
        this.chargeStatus = chargeStatus
        this.branchOwner = branchOwner   
    }
}

module.exports = Scooter