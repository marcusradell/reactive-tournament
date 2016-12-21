export default function create ({Input, children}) {
  return children
  .map(function onMap (inputModels) {
    return Object.keys(inputModels)
    .reduce(function onReduceModelToViewable (acc, key) {
      acc[key] = Input({model: inputModels[key]})
      return acc
    }, {})
  })
}
