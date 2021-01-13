class Airplane {
    flightNumber;
    flightDestination;
    flightDeparture;
    flightType;
    
    constructor (flightNumber, flightDestination, flightDeparture, flightType) {
        this.flightNumber = flightNumber
        this.flightDestination = flightDestination
        this.flightDeparture = flightDeparture
        this.flightType = flightType
    }
}

module.exports = Airplane;

