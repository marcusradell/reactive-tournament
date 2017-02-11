export default function create ({
  provider,
  EntityInput,
  schema,
  entityType,
  id
}) {
  return schema
  .reduce(function onReduce (acc, schemaRow) {
    acc[schemaRow.name] = EntityInput({
      provider,
      entityType,
      fieldName: schemaRow.name,
      type: schemaRow.type,
      id
    })
    return acc
  }, {})
}
