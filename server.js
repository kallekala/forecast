const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//testaan databasea

MongoClient.connect('mongodb://localhost:27017/forecastapp', (err, db) => {
  if (err) {
    console.log("unable to connect to mongodb server");
  } else {
  console.log("connected to mongodb server");
  }

//toarrayn sijaan monta metodia jotka hyvin listattu sivulla
db.collection('ennustukset').find({completed:false}).toArray().then((docs) => {
  console.log("ennustukset");
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log("unable to fetch forecasts", err);
});

// db.collection('ennustukset').insertOne({
//   todennäköisyys: 'jotain muuta',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     //returnin takia ei tarvi elseä. return lopettaa funktion
//     return console.log('unable to insert todo');
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.close();
});



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

//lyö pääsivun päälle. ei jostain syystä toimi jos renderöitävä sivu on samassa kansiossa
app.get('/', (req, res) => {

  res.render('main.hbs', {
    welcomeMessage: 'tervetuloa',
    pageTitle: 'pääsivu',
    currentYear: new Date().getFullYear()
  });
  res.send([{
    name: 'Mike',
    age: 27
  }, {
    name: 'Andrew',
    age: 25
  }, {
    name: 'Jen',
    age: 26
  }]);
});

app.listen(port, () => {
  console.log(`server up on port ${port}`);
});

module.exports.app = app;
