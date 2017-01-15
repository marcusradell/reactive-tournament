export default function create ({provider, Input, schema}) {
  return schema
  .reduce(function onReduce (acc, schemaRow) {
    acc[schemaRow.name] = Input({
      provider,
      name: schemaRow.name,
      type: schemaRow.type
    })
    return acc
  }, {})
}
