migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4iui0wg9",
    "name": "release_year",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // remove
  collection.schema.removeField("4iui0wg9")

  return dao.saveCollection(collection)
})
