const sqlite3 = require('sqlite3').verbose();
const fsp = require('fs').promises; // Node.js file system module with promises


//contains information to load the code

async function load() {
    console.log('calling load');
    const restaurantFile = './data.json'; //asynchronously reads the contents of the restaurant data file

    const buffer = await fsp.readFile(restaurantFile); // wait for the restaurant data file to be read
    const restaurantsArray = (JSON.parse(String(buffer))); //converts the read file data into JS objects (arrays)
    console.log(restaurantsArray);

    const db = new sqlite3.Database('./restaurant1.sqlite');

    db.serialize(function () {
        try {
            let stmt;

            try {
                stmt = db.prepare(`INSERT INTO RESTAURANT (Name, Menu, Image) VALUES (?, ?, ?)`);

                for (let i = 0; i < restaurantsArray.length; i++) {
                    // console.log(restaurantsArray[i].name);
                    stmt.run(restaurantsArray[i].name);
                }

            } finally {
                stmt.finalize(); // releases any any internal resources and deallocates any memory
            }
            try {
                stmt = db.prepare(`INSERT INTO MENU (Title, Items) VALUES (?, ?)`);
                stmt.run();
            } finally {
                stmt.finalize(); // releases any any internal resources 
                // and deallocates any memory
            }
            try {
                stmt = db.prepare(`INSERT INTO MENUITEM (menu_id, name, price) VALUES (?, ?, ?)`);
                stmt.run();
            } finally {
                stmt.finalize(); // releases any any internal resources and deallocates any memory
            }
            // select the rows and print them
            db.each("SELECT * FROM Restaurant", function (err, rows) {
                console.log(rows);
            });
        } finally {
            db.close();
        }
    })
}

load();