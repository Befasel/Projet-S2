migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ov8gzybz",
    "name": "affiche",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // remove
  collection.schema.removeField("ov8gzybz")

  return dao.saveCollection(collection)
})
