export default function create ({
  React,
  childViews
}) {
  // return mostCombineArray(function onCombine (...childVNodes) {
  //   // TODO: continue here.
  //   return h('div',
  //     [...childVNodes]
  //   )
  // }, childViews)
  return () => (
    <div>
      {
        childViews.map(Child => (
          <Child key={Child.key} />
        ))
      }
    </div>
  )
}
