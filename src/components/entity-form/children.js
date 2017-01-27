export default function create ({provider, Input, schema, entityType, id}) {
  return schema
  .reduce(function onReduce (acc, schemaRow) {
    acc[schemaRow.name] = Input({
      provider,
      entityType,
      fieldName: schemaRow.name,
      type: schemaRow.type,
      id
    })
    return acc
  }, {})
}
