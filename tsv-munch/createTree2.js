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
  // {
  //   "name": "Zappendicularia",
  //   "children": []
  // }
]

organismsArray.forEach(function(item, i) {
  console.log(i, item.class, classExists(item.class, tree));
  if (!classExists(item.class, tree)) {
    var newClass = {
      "name": organismsArray[i].class,
      "children": []
    }
    tree.push(newClass)
  }
})

console.log('==================');
console.log('Tree', tree);

function classExists(className, tree) {
  var found = false
  tree.forEach(function(treeItem, i) {
    if (className === treeItem.name) {
      found = true
    }
  })
  return found
}
