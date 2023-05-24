migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xpktptnu",
    "name": "release_year",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // remove
  collection.schema.removeField("xpktptnu")

  return dao.saveCollection(collection)
})
