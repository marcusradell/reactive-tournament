export default function create ({EntityInput, ReactObserver, children}) {
  return Object.keys(children)
  .reduce(function onReduceModelToViewable (acc, key) {
    acc[key] = EntityInput({model: children[key]})
    return acc
  }, {})
}
