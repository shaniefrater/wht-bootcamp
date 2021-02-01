const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const { Restaurant } = require('./Restaurant')
const { Menu } = require('./Menu')
const { MenuItem } = require('./MenuItem')

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
                include: [{ model: MenuItem, as: 'items' }]
            }
        ],
        nest: true
    })
    res.render('home', { restaurants })
})

// this route matches any GET request to the top level URL
app.get('/', (request, response) => {
    response.render('restaurants', { date: new Date() })
})


// We need a route that also has a route parameter. Add the new route below to your server.

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    if (!restaurant) {
        res.redirect("/")
        return
    }

    console.log(req.params.id)
    console.log("Found Restaurant" + restaurant)
    const menus = await restaurant.getMenus({
        include: [{ model: MenuItem, as: 'items' }],
        nest: true
    })
    console.log(menus)
    res.render('restaurant', { restaurant, menus })
})

app.get('/home', (request, response) => {
    response.redirect('/')
})

app.get('/about', (request, response) => {
    response.render('about')
})
app.get('/new', (request, response) => {
    response.render('new')
})

app.post('/restaurants', async (req, res) => {
    console.log(req.body); // this is the JSON body

    // TODO - add code to insert data into the database!

    res.redirect('/')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// add a delete button into restaurant
app.get('/restaurants/:id/delete', (req, res) => {
    Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            restaurant.destroy()
            res.redirect('/')
        })
})

//edit restaurant
app.get('/restaurants/:id/edit', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('edit', { restaurant })
})

app.put('/restaurants/:id/edit', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    await restaurant.update(req.body)
    res.redirect(`/restaurants/${restaurant.id}`)
})

    // this route matches any GET request to the http://localhost:3000/about

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`)
    })