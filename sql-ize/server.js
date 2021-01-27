const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')

const app = express();
const port = 3000;

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:MenuItem, as: 'items'}]
            }
        ],
        nest: true
    })
    res.render('home', {restaurants})
})

// this route matches any GET request to the top level URL
app.get('/', (request, response) => {
    response.render('restaurants', {date: new Date()})
})


// We need a route that also has a route parameter. Add the new route below to your server.

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(1)
    console.log("Found Restaurant" + restaurant) 
    const menus = await restaurant.getMenus({
        include: [{model: MenuItem, as: 'items'}],
        nest: true
    })
    res.render('restaurant', {restaurant, menus})
})

// this route matches any GET request to the http://localhost:3000/about
app.get('/about', (request, response) => {
    response.render('about', {date: new Date(), author:'multiverse'})
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})