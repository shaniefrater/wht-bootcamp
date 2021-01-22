const sqlite3 = require('sqlite3').verbose();
const fsp = require('fs').promises; // Node.js file system module with promises


//contains information to load the code

async function load() {
    console.log('calling load');
    const restaurantFile = './data.json'; //asynchronously reads the contents of the restaurant data file

    const buffer = await fsp.readFile(restaurantFile); // wait for the restaurant data file to be read
    const restaurantsArray = (JSON.parse(String(buffer))); //converts the read file data into JS objects (arrays)
    // console.log(restaurantsArray);

    const db = new sqlite3.Database('./restaurant1.sqlite');

    db.serialize(function () {
        try {

            for (let i = 0; i < restaurantsArray.length; i++) {
                const currentRestaurant = restaurantsArray[i]

                // console.log(currentRestaurant.name);

                let restaurantstmt;

                try {
                    restaurantstmt = db.prepare(`INSERT INTO RESTAURANT (Name, Image) VALUES (?, ?)`);
                    restaurantstmt.run(currentRestaurant.name, currentRestaurant.image);
                } finally {
                    restaurantstmt.finalize(); // releases any any internal resources and deallocates any memory
                }

                for (let j = 0; j < currentRestaurant.menus.length; j++) {
                    const currentMenu = currentRestaurant.menus[j]

                    // console.log(restaurantsArray[j].menus);

                    let menusstmt;

                    try {
                        menusstmt = db.prepare(`INSERT INTO MENU (Title, RestaurantID) VALUES (?, ?)`);
                        menusstmt.run(currentMenu.title, i + 1);
                    } finally {
                        menusstmt.finalize(); // releases any any internal resources and deallocates any memory
                    }

                    for (let k = 0; k < currentMenu.items.length; k++) {
                        const currentMenuItem = currentMenu.items[k]

                        console.log(currentMenuItem.name);

                        let menuitemstmt;

                        try {
                            menuitemstmt = db.prepare(`INSERT INTO MENUITEM (name, price, menu_id) VALUES (?, ?, ?)`);
                            menuitemstmt.run(currentMenuItem.name, currentMenuItem.price, j + 1);
                        } finally {
                            menuitemstmt.finalize();
                        }
                    }
                }
            }
        } finally {
            db.close();
        }
    })
}

load();