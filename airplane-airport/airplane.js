class Airplane {
    flightNumber;
    flightDestination;
    flightDeparture;
    flightType;
    
    constructor (flightNumber, flightDestination, flightDeparture, flightType) {
        
        if (!flightType) {
            throw new Error ("Error, flight type not found")
        }

        this.flightNumber = flightNumber
        this.flightDestination = flightDestination
        this.flightDeparture = flightDeparture
        this.flightType = flightType
    }
}

module.exports = Airplane;

