export default function create({h, childrenStream}) {
  const view = childrenStream
  .flatMap(function onFlatMap(childrenArray) {
    return childrenArray
    .map(function onMap(childComponent, index) {
      return {
        view: childComponent.view,
        index
      }
    })
  })
  .map(function onMap() {
    return function reduce() {
      return h('div', [
        
      ])
    }
  })

  return view
}
