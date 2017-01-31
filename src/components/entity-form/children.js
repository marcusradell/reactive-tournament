export default function create ({
  provider,
  Input,
  schema,
  entityType,
  selectedId_
}) {
  return schema
  .reduce(function onReduce (acc, schemaRow) {
    acc[schemaRow.name] = Input({
      provider,
      entityType,
      fieldName: schemaRow.name,
      type: schemaRow.type,
      selectedId_
    })
    return acc
  }, {})
}
