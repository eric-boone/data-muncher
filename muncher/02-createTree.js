var fs = require('fs')

var sourceFile = './output/taxa.json'


fs.readFile(sourceFile, 'utf-8', function(err, data) {
  if (err) throw err

  var chordataTree = []
  var organismsArray = JSON.parse(data)
  var numberOfOrganismsToProcess = organismsArray.length

  // organismsArray.forEach(function(organism, i) {
  for (var i=0; i<numberOfOrganismsToProcess; i++) {
    var indexOfClass,
        indexOfOrder,
        indexOfFamily,
        indexOfGenus
    var organism = organismsArray[i]

    /*** CLASS ***/
    // Create the Class if it does not exist
    if (!taxonLevelExists(organism.class, chordataTree)) {
      var newClass = {
        "taxonRank": "class",
        "name": organismsArray[i].class, // use organism.class?
        "children": []
      }
      chordataTree.push(newClass)
    }
    // Get the index of the class
    indexOfClass = taxonLevelExists(organism.class, chordataTree)

    /*** ORDER ***/
    // Create the Order if it does not exist
    var orderTree = chordataTree[indexOfClass].children
    if (!taxonLevelExists(organism.order, orderTree)) {
      var newOrder = {
        "taxonRank": "order",
        "name": organism.order,
        "children": []
      }
      orderTree.push(newOrder)
    }
    // Get the index of the family
    indexOfOrder = taxonLevelExists(organism.order, orderTree)

    /*** FAMILY ***/
    // Create the Family if it does not exist
    var familyTree = orderTree[indexOfOrder].children
    if (!taxonLevelExists(organism.family, familyTree)) {
      var newFamily = {
        "taxonRank": "family",
        "name": organism.family,
        "children": []
      }
      familyTree.push(newFamily)
    }
    // Get the index of the family
    indexOfFamily = taxonLevelExists(organism.family, familyTree)

    /*** GENUS ***/
    var genusTree = familyTree[indexOfFamily].children
    if (!taxonLevelExists(organism.genus, genusTree)) {
      var newGenus = {
        "taxonRank": "genus",
        "name": organism.genus,
        "children": []
      }
      genusTree.push(newGenus)
    }
    indexOfGenus = taxonLevelExists(organism.genus, genusTree)

    /*** SPECIES ***/
    var speciesTree = genusTree[indexOfGenus].children
    var newSpecies = {
      "taxonRank": "species",
      "name": organism.specificEpithet,
      "description": organism.description,
      "references": organism.references
    }
    speciesTree.push(newSpecies)


  } // end for loop

  // After the tree is built, write it to a file
  fs.writeFile('./output/tree-' + numberOfOrganismsToProcess + '.json', JSON.stringify(chordataTree))
})


/****************************************************************************/
// Return index if found, false if not found
function taxonLevelExists(taxonLevelName, tree) {
  var found = false
  tree.forEach(function(treeItem, i) {
    if (taxonLevelName === treeItem.name) {
      found = i
    }
  })
  return found
}

function limitedTaxonLevelExists(taxonLevelName, tree) {
  var found = false
  tree.forEach(function(treeItem, i) {
    if (taxonLevelName === treeItem.name) {
      found = i
    }
  })
  return found
}
