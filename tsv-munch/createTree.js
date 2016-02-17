var animalsJson =
[
  {
    "taxonID": "5284640",
    "parentNameUsageID": "25818310",
    "taxonRank": "species",
    "kingdom": "Animalia",
    "phylum": "Chordata",
    "class": "Appendicularia",
    "order": "Copelata",
    "family": "Fritillariidae",
    "genericName": "Appendicularia",
    "genus": "Appendicularia",
    "specificEpithet": "sicula",
    "description": "pelagic",
    "scientificNameID": "URM-2-1783",
    "references": "http://www.catalogueoflife.org/annual-checklist/details/species/id/40cdfc25c21fc8b34c997b62e93c6233",
    "isExtinct": "false"
  },
  {
    "taxonID": "5284641",
    "parentNameUsageID": "25818310",
    "taxonRank": "species",
    "kingdom": "Animalia",
    "phylum": "Chordata",
    "class": "Appendicularia",
    "order": "Copelata",
    "family": "Fritillariidae",
    "genericName": "Appendicularia",
    "genus": "Appendicularia",
    "specificEpithet": "tregouboffi",
    "description": "",
    "scientificNameID": "URM-2-1784",
    "references": "http://www.catalogueoflife.org/annual-checklist/details/species/id/e2c54bce71ff1de869244c7c18892d20",
    "isExtinct": "false"
  },
  {
    "taxonID": "5284642",
    "parentNameUsageID": "25818311",
    "taxonRank": "species",
    "kingdom": "Animalia",
    "phylum": "Chordata",
    "class": "Appendicularia",
    "order": "Copelata",
    "family": "Fritillariidae",
    "genericName": "Fritillaria",
    "genus": "Fritillaria",
    "specificEpithet": "aberrans",
    "description": "",
    "scientificNameID": "URM-2-1785",
    "references": "http://www.catalogueoflife.org/annual-checklist/details/species/id/67d7f2d8f748d626bb407a43227554f1",
    "isExtinct": "false"
  }
]

const processAnimalsJson = (animalsJson) =>
	animalsJson.reduce((animals, animal) => {
  	const kingdom = getOrCreate(animals, animal.kingdom)
    const phylum = getOrCreate(kingdom, animal.phylum)
  	const class_ = getOrCreate(phylum, animal.class)
    const data = getOrCreate(class_, animal.specificEpithet)
    Object.assign(data, animal)
    return animals
  }, {})

const getOrCreate = (object, property) =>
	object[property]
  	? object[property]
  	: object[property] = {}

console.log(processAnimalsJson(animalsJson))
