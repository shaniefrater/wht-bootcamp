const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

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
        include: [{ model: Menu, as: 'menus' }],
        nest: true
    })
    res.render('home', { restaurants })

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`)
    })
})

