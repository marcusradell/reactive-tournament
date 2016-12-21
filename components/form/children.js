export default function create ({mostOf, Input, inputNames}) {
  const inputComponents = inputNames
  .reduce(function onReduce (acc, inputName) {
    acc[inputName] = Input({name: inputName})
    return acc
  }, {})
  return mostOf(inputComponents)
}
