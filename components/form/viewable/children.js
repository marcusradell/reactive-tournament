export default function create ({Input, children}) {
  return Object.keys(children)
  .reduce(function onReduceModelToViewable (acc, key) {
    acc.children[key] = Input({model: children[key]})
    acc.childViews = [...acc.childViews, acc.children[key].view]
    return acc
  }, {children: {}, childViews: []})
}
