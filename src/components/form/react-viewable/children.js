export default function create ({Input, ReactObserver, children}) {
  return Object.keys(children)
  .reduce(function onReduceModelToViewable (acc, key) {
    acc.children[key] = Input({model: children[key]})
    // TODO: Refactor
    acc.children[key].view.key = key
    acc.childViews = [...acc.childViews, acc.children[key].view]
    return acc
  }, {children: {}, childViews: []})
}
