var organismsArray =
[
  {
    "class": "Appendicularia",
    "order": "Copelata",
    "family": "Fritillariidae",
  },
  {
    "class": "Zappendicularia",
    "order": "Lopelazzi",
    "family": "Meattillariidae",
  }
]

var tree =
[
  {
    "name": "Zappendicularia",
    "children": []
  }
]

organismsArray.forEach(function(item, i) {
  console.log(i, item, classDoesNotExist(item.class, tree));
  if (classDoesNotExist(item.class, tree)) {
    var newClass = {
      "name": organismsArray[i].class,
      "children": []
    }
    tree.push(newClass)
  }
})

console.log('==================');
console.log('Tree', tree);

function classDoesNotExist(className, tree) {
  var notFound = true
  // iterate over tree array
  tree.forEach(function(treeItem, i) {
    // console.log(i, className, treeItem.name);
    // console.log((className === treeItem.name));
    if (className === treeItem.name) {
      notFound = false
    }
  })
  // if you get through the whole thing and haven't found it,
  // return classDoesNotExist
  return notFound
}
