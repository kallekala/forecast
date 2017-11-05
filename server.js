const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//portti herokulle
const port = process.env.PORT || 3000;

var app = express();

//partials käyttöön
hbs.registerPartials(__dirname + '/views/partials')
// laittaa public-folderin käyttöön
app.use(express.static(__dirname + '/public'));
// hbs käyttöön
app.set('view engine', 'hbs');

//middleware


// hbs helpers

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

app.get('/', (req, res) => {
  res.render('main.hbs', {
    welcomeMessage: "tervetuloa",
    pageTitle: 'pääsivu',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log(`server up on port ${port}`);
});
