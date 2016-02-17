var fetch = require('./fetch')

var id = '22032961&hash=24392c3c63d5a1f7267d'
var url = 'http://www.catalogueoflife.org/annual-checklist/2015/webservice?' +'id=' + id + '&format=json&response=full'

var promise = fetch(url)

promise
  // phylum
  .then(function (response) {
    var array = response.body.results[0].child_taxa
    console.log(array[0].rank + ': ' + array[0].name);
    id = array[0].id
    url = 'http://www.catalogueoflife.org/annual-checklist/2015/webservice?' +'id=' + id + '&format=json&response=full'
    return fetch(url)
  })
  // class
  .then(function (response) {
    var array = response.body.results[0].child_taxa
    console.log(array[0].rank + ': ' + array[0].name);
    id = array[0].id
    url = 'http://www.catalogueoflife.org/annual-checklist/2015/webservice?' +'id=' + id + '&format=json&response=full'
    return fetch(url)
  })
  // order
  .then(function (response) {
    var array = response.body.results[0].child_taxa
    console.log(array[0].rank + ': ' + array[0].name);
    id = array[0].id
    url = 'http://www.catalogueoflife.org/annual-checklist/2015/webservice?' +'id=' + id + '&format=json&response=full'
    return fetch(url)
  })
  // family
  .then(function (response) {
    var array = response.body.results[0].child_taxa
    console.log(array[0].rank + ': ' + array[0].name);
    id = array[0].id
    url = 'http://www.catalogueoflife.org/annual-checklist/2015/webservice?' +'id=' + id + '&format=json&response=full'
    return fetch(url)
  })
  // genus
  .then(function (response) {
    var array = response.body.results[0].child_taxa
    console.log(array[0].rank + ': ' + array[0].name);
    id = array[0].id
    url = 'http://www.catalogueoflife.org/annual-checklist/2015/webservice?' +'id=' + id + '&format=json&response=full'
    return fetch(url)
  })
  // species
  .then(function (response) {
    var array = response.body.results[0].child_taxa
    console.log(array[0].rank + ': ' + array[0].name);
    return null
  })
  .catch(function (err) {
    console.error('WE GOT ERROR', err)
  })
