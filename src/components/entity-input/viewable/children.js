export default function create ({Button, children}) {
  return Object.keys(children)
  .reduce(function onReduce (acc, key) {
    acc[key] = Button({model: children[key]})
    return acc
  }, {})
}
