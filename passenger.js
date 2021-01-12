/** Passenger document. */
function foo() {
}
const Person = require('./person')

/**
 * Represents someone whos flying with the aircraft 
 * @constructor
 */
function Book(title, author) {
}

class Passenger extends Person {
    ticketNumber;
    passportType;

    constructor(name, ticketNumber, passportType) {
        super(name);
        this.ticketNumber = ticketNumber;
        this.passportType = passportType;  
    }
}

module.exports = Passenger;

/* l9 constructor method constructs a new passenger with the name, ticket no, passport type etc */ 