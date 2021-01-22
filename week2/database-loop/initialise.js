const sqlite3 = require('sqlite3').verbose();

//contains information to load the code

function initialize() {

    // connect to the database
    const db = new sqlite3.Database('./restaurant1.sqlite');

    try {
        db.serialize(function () {
            // create the empty table with specific columns and column types
            db.run("DROP TABLE IF EXISTS RESTAURANT")
            db.run("DROP TABLE IF EXISTS MENU")
            db.run("DROP TABLE IF EXISTS MENUITEM")

            db.run("CREATE TABLE IF NOT EXISTS RESTAURANT (Name TEXT, Image TEXT)");
            db.run("CREATE TABLE IF NOT EXISTS MENU (Title TEXT, RestaurantID INTEGER)");
            db.run("CREATE TABLE IF NOT EXISTS MENUITEM (ID integer PRIMARY KEY AUTOINCREMENT, menu_id TEXT, name TEXT, price INTEGER)");
        });
    } finally {
        db.close();
    }
}

initialize ();
