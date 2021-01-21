//contains code to CREATE tables

// this is for populate DB
const sqlite3 = require('sqlite3').verbose(); // just a function that requires all SQLite functions in JS
const db = new sqlite3.Database('./loop.sqlite');
const fsp = require('fs').promises; // Node.js file system module with promises
const path = require('path'); // Node.js directories and file paths module

async function load() {
    console.log('calling load');
    const restaurantFile = './data.json'; //asynchronously reads the contents of the restaurant data file

    const buffer = await fsp.readFile(restaurantFile); // wait for the restaurant data file to be read
    const restaurants = (JSON.parse(String(buffer))); //converts the read file data into JS objects (arrays)
    console.log(restaurants);

    // loop through the restaurantsArray to get hold of the list of restaurants
    for (let i = 0; i < restaurantsArray.length; i++) {
        console.log(restaurantsArray[i].name); // printing name of each restaurant

        // loop through the menus associated with the restaurant
        for (let j = 0; j < restaurantsArray[i].menu.length; j++) {
            console.log(restaurantsArray[i].menu[j].title);   // printing title of each menu

        // add additional loops
        }
    }
}
// main flow

load();