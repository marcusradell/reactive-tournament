export default function create ({Input, schema}) {
  return schema
  .reduce(function onReduce (acc, schemaRow) {
    acc[schemaRow.name] = Input({
      name: schemaRow.name,
      type: schemaRow.type
    })
    return acc
  }, {})
}
