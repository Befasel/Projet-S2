migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // remove
  collection.schema.removeField("ycb4xp4z")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycb4xp4z",
    "name": "exit",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
