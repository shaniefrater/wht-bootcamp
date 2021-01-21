const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./restaurant.sqlite');
/**
 * Executes the SQL statements one at a time.
 */
db.serialize(function () {

    try {
        // create the empty table with specific columns and column types
        db.run("DROP TABLE IF EXISTS RESTAURANT")
        db.run("DROP TABLE IF EXISTS MENU")
        db.run("DROP TABLE IF EXISTS MENUITEM")
        
        db.run("CREATE TABLE IF NOT EXISTS RESTAURANT (RestaurantID PRIMARY KEY, Name, Location, Link, FOREIGN KEY (RestaurantID) REFERENCES MENU(RestaurantID));");
        db.run("CREATE TABLE IF NOT EXISTS MENU (ID integer PRIMARY KEY AUTOINCREMENT, MenuID, Title, RestaurantID, FOREIGN KEY (MenuID) REFERENCES MENUITEM(MenuID))");
        db.run("CREATE TABLE IF NOT EXISTS MENUITEM (ItemID PRIMARY KEY, Name, MenuID)");
        let stmt;
        try {
            stmt = db.prepare(`INSERT INTO RESTAURANT (RestaurantID, Name, Location, Link) VALUES  
                        ('1', 'Wingmans', 'Kilburn', 'https://shop.wingmans.co.uk/') , 
                        ('2', 'Shake Shack', 'Leicester Square', 'https://www.shakeshack.co.uk/') , 
                        ('3', 'Chick n Sours', 'Islington', 'https://www.chicknsours.co.uk/') ,
                        ('4', 'Thunderbird Chicken', 'Brixton', 'https://thunderbirdckn.co.uk/') ,
                        ('5', 'Blues Kitchen', 'Shoreditch', 'https://theblueskitchen.com/shoreditch/') ,
                        ('6', 'Butchies', 'Shoreditch', 'https://butchies.co.uk/')`);
            stmt.run();
        } finally {
            stmt.finalize(); // releases any any internal resources and deallocates any memory
        }
        try {
            stmt = db.prepare(`INSERT INTO MENU (MenuID, Title, RestaurantID) VALUES 
                        ('APT', 'Appetisers', '1') , 
                        ('WNG', 'Wings', '1') , 
                        ('SDE', 'Sides', '1') ,
                        ('DNK', 'Drinks', '1') , 
                        ('WNG', 'Wings', '2') , 
                        ('SDE', 'Sides', '2') ,
                        ('DNK', 'Drinks', '2') ,
                        ('CHL', 'Challenge', '2') , 
                        ('CHL', 'Challenge', '3') , 
                        ('WNG', 'Wings', '3') , 
                        ('SDE', 'Sides', '3') ,
                        ('DNK', 'Drinks', '3') ,
                        ('CHL', 'Challenge', '4') , 
                        ('WNG', 'Wings', '4') , 
                        ('SDE', 'Sides', '4') ,
                        ('DNK', 'Drinks', '4') ,
                        ('PLT', 'Wing Platters', '5') , 
                        ('BGR', 'Burgers', '5') , 
                        ('SDE', 'Sides', '5') ,
                        ('DNK', 'Drinks', '5') , 
                        ('STS', 'Southern', '5') ,
                        ('WNG', 'Wings', '6') , 
                        ('SDE', 'Sides', '6') ,
                        ('DNK', 'Drinks', '6')`);
            stmt.run();
        } finally {
            stmt.finalize(); // releases any any internal resources 
            // and deallocates any memory
        }
        try {
            stmt = db.prepare(`INSERT INTO MENUITEM VALUES 
                        ('100', 'Honey Glazed Wings', 'WNG')`);
            stmt.run();
        } finally {
            stmt.finalize(); // releases any any internal resources and deallocates any memory
        }
        // select the rows and print them
        db.each("SELECT * FROM Restaurant", function (err, rows) {
            console.log(rows);
            // SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
            // FROM Orders
            // INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
            //SELECT Restaurant.RestaurantID, Menu.RestaurantID FROM Restaurant
            //INNER JOIN Restaurant ON Menu.RestaurantID=Restaurant.RestaurantID;
        });
    } finally {
        db.close();
    }
});