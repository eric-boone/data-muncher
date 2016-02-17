//var csv is the CSV file with headers
var csvData =
"taxonID,parentNameUsageID,taxonRank,kingdom,phylum,class,order,family,genericName,genus,specificEpithet,description,scientificNameID,references,isExtinct" + "\n" +
"5284640,25818310,species,Animalia,Chordata,Appendicularia,Copelata,Fritillariidae,Appendicularia,Appendicularia,sicula,pelagic,URM-2-1783,http://www.catalogueoflife.org/annual-checklist/details/species/id/40cdfc25c21fc8b34c997b62e93c6233,false" + "\n" +
"5284641,25818310,species,Animalia,Chordata,Appendicularia,Copelata,Fritillariidae,Appendicularia,Appendicularia,tregouboffi,,URM-2-1784,http://www.catalogueoflife.org/annual-checklist/details/species/id/e2c54bce71ff1de869244c7c18892d20,false" + "\n" +
"5284642,25818311,species,Animalia,Chordata,Appendicularia,Copelata,Fritillariidae,Fritillaria,Fritillaria,aberrans,,URM-2-1785,http://www.catalogueoflife.org/annual-checklist/details/species/id/67d7f2d8f748d626bb407a43227554f1,false"

// console.log(csvData);

console.log(csvJSON(csvData))

function csvJSON(csv){
  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
