const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const customer = require("./customer")

/* importing the contents of the customer class to allow it (equivalent to java.util) */

describe('customer', function () {
    test('customer Information', function () {
        const janeDoe = new customer ("Jane Doe", "janedoe@gmail.com", "07734565558", "SC00065");
        expect(janeDoe.customerNumber).toHaveLength(11);
        expect(janeDoe.customerEmail).toContain("@")
    })

    test('Customer number', function () {
        try {
            const johnDoe = new customer ("John Doe", "JohnDoe@gmail.com", "0778569774", "SCOOO68"); 
            fail ();
        
        } catch (err) {
            console.log("Incorrect mobile number input");
        }
    })
})