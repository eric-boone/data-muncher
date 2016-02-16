var unirest = require('unirest')

module.exports = function (uri) {
  return new Promise(function (resolve, reject) {
    unirest.get(uri).end(function (response) {
      resolve(response)
    })
  })
}
