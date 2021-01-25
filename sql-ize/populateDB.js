const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')

// code displaying loops

const fsp = require('fs').promises; // Node.js file system module with promises

//contains information to load the code

async function load() { // loads data
    console.log('calling load');
    const restaurantFile = './data.json'; //asynchronously reads the contents of the restaurant data file

    const buffer = await fsp.readFile(restaurantFile); // wait for the restaurant data file to be read
    const restaurantsArray = (JSON.parse(String(buffer))); //converts the read file data into JS objects (arrays)
    // console.log(restaurantsArray);

    for (let i = 0; i < restaurantsArray.length; i++) {
        const currentRestaurant = restaurantsArray[i]

        await Restaurant.create({name: currentRestaurant.name, image: currentRestaurant.image})

        for (let j = 0; j < currentRestaurant.menus.length; j++) {
            const currentMenu = currentRestaurant.menus[j]

            await Menu.create({title: currentMenu.title, menu_id: j++})

            for (let k = 0; k < currentMenu.items.length; k++) {
                const currentMenuItem = currentMenu.items[k]

                await MenuItem.create ({name: currentMenuItem.name, price: currentMenuItem.price})
            }
        }
    }
}
//testing code
load()