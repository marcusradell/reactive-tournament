export default function create ({Input, ReactObserver, children}) {
  return Object.keys(children)
  .reduce(function onReduceModelToViewable (acc, key) {
    acc[key] = Input({model: children[key]})
    return acc
  }, {})
}
