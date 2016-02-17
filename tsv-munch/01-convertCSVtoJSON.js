var fs = require('fs')
var csvMunch = require('./csv-munch')

var originalDataFile = './darwin-data/taxa_edited.csv'

fs.readFile(originalDataFile, 'utf-8', function(err, data) {
  if (err) throw(err)
  var json = csvMunch(data)
  fs.writeFile('./taxa.json', json)
})
