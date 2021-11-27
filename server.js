
// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3001;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded());


// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
    res.render('index.ejs', { bakedGoods: bakedGoods })
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
    res.render('show.ejs', { bakedGood: bakedGoods[req.params.id] });

});

//add goods route
app.get('/add', (req, res) => {
    res.render('add.ejs');
});

//newbakedgoods POST route
app.post('/newbakedgoods', (req, res) => {
    bakedGoods.push(req.body);
    res.redirect('/bakedgoods');
})

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Biscoff Bakery app listening on port: ${port}`)
});