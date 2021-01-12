const Person = require('./day1/person')

/* Represents someone whos flying witht the aircraft */

class Passenger extends Person {
    ticketNumber;
    passportType;
    name;

    constructor(ticketNumber, passportType, bags) {
        this.ticketNumber = ticketNumber;
        this.passportType = passportType;  
    }
}


