// const { test, expect } = require("@jest/globals");
// const { describe } = require("yargs");
const Customer = require("../Src/Customer")

/* importing the contents of the customer class to allow it (equivalent to java.util) */

describe('customer', function () {
    test('customer Information', function () {
        const janeDoe = new Customer ("Jane Doe", "janedoe@gmail.com", "07734565558", "janey150", "SC00065");
        expect(janeDoe.customerNumber).toHaveLength(11);
        expect(janeDoe.customerEmail).toContain("@")
    })

    test('Customer number', function () {
        try {
            const johnDoe = new Customer ("John Doe", "JohnDoe@gmail.com", "077856977412", "SCOOO68"); 
            fail("hey");
        
        } catch (err) {
            console.log("Incorrect mobile number input");
        }
    })
})