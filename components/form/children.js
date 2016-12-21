export default function create ({Input, inputNames}) {
  return inputNames
  .reduce(function onReduce (acc, inputName) {
    acc[inputName] = Input({name: inputName})
    return acc
  }, {})
}
