# Data Muncher

A script, which is to be run once and only once, that does the following:

- Runs out and grabs a bunch of data about animals and their taxonomies
- Parses this data
- Generates a json object that is consumable by D3.js. 

The resulting object will end up in a folder on the [front-end site](https://github.com/TelegraphMoarInterstices/front-end) in a file named something like treeData.json. And the contents should look something like this:

```
{
  "name": "Chordata",
  "children": [
    {
      "name": "Mammalia",
      "children": [
        {"name": "Primate",
          "children": [
            {
              "name": "Lemuridae",
              "children": [
                {
                  "name": "Lemur",
                  "children": [
                    {
                      "name": "Ring-tailed Lemur",
                      "habitat": "Very cute."
                    }
                  ]
                }
              ]
            },
            {
              "name": "Catarrhini",
              "children": [
                {"name": "Cercopithecoidea"},
                {
                  "name": "Hominoidea",
                  "children": [
                    {"name": "Ponginae"},
                    {"name": "Gorillinae"},
                    {
                      "name": "Homininae",
                      "habitat": "Hey, that's me!"
                    }
                  ]
                }
              ]
            },
            {"name": "Lorisiformes"}
          ]
        },
        {"name": "Marsupialia"},
        {"name": "Cetacea"},
        {"name": "Proboscidea"}
      ]
    },
    {
      "name": "Aves",
      "children": [
        {"name": "Struthioniformes",
          "children": [
            {"name": "Emu"},
            {"name": "Ostrich"},
            {"name": "Kiwi"}
          ]},
        {"name": "Turniciformes"},
        {"name": "Piciformes"}
      ]},
    {"name": "Reptilia"}
  ]
}

```
